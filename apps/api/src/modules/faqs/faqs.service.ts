import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../shared/infrastructure/prisma.service';
import { Session } from '../../types/session';
import { AddFaqDto } from './dto/add-faq.dto';
import { LogsService } from '../logs/logs.service';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { DeleteFaqDto } from './dto/remove-faq.dto';

@Injectable()
export class FaqsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logsService: LogsService,
  ) {}

  async getAllFaqs() {
    return this.prisma.faq.findMany();
  }

  async add(data: AddFaqDto, user: Session['user']) {
    if (!user) {
      throw new UnauthorizedException(
        'Demande non autorisée. Veuillez vous connecter.',
      );
    }

    const faq = await this.prisma.faq.create({
      data,
    });

    await this.logsService.add({
      type: 'AJOUT',
      message: `L'utilisateur ${user.name} a ajouté un faq. ID: ${faq.id}`,
      userId: user.id,
    });

    return { message: 'Une nouvelle faq a été ajouté.' };
  }

  async delete(data: DeleteFaqDto, user: Session['user']) {
    if (!user) {
      throw new UnauthorizedException(
        'Demande non autorisée. Veuillez vous connecter.',
      );
    }
    const faq = await this.prisma.faq.delete({
      where: {
        id: data.id,
      },
    });

    await this.logsService.add({
      type: 'SUPPRESSION',
      message: `L'utilisateur ${user.name} a supprimé une faq.`,
      userId: user.id,
    });

    if (!faq) {
      return { message: "Le faqs n'a pas pu être supprimé." };
    }
    return { message: 'Le faqs a bien été supprimé.' };
  }

  async update(data: UpdateFaqDto, user: Session['user']) {
    if (!user) {
      throw new UnauthorizedException(
        'Demande non autorisée. Veuillez vous connecter.',
      );
    }
    const faq = await this.prisma.faq.update({
      where: {
        id: data.id,
      },
      data,
    });

    await this.logsService.add({
      type: 'MODIFICATION',
      message: `L'utilisateur ${user.name} a modifié une faq. ID: ${faq.id}`,
      userId: user.id,
    });

    if (!faq) {
      return { message: "La faq n'a pas pu être modifié." };
    }
    return { message: 'La faq a bien été modifié.' };
  }
}
