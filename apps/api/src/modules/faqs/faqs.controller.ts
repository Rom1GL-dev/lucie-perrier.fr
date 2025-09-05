import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { routesV1 } from '../../config/app.routes';
import { AuthGuard } from '../auth/auth.guard';
import { FaqsService } from './faqs.service';
import { AddFaqDto } from './dto/add-faq.dto';
import { AuthenticatedRequest } from '../../types/auth-request';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { DeleteFaqDto } from './dto/remove-faq.dto';

@Controller(routesV1.version)
export class FaqsController {
  constructor(private readonly faqsService: FaqsService) {}

  @Get(routesV1.faqs.root)
  async getAllFaqs() {
    const faqs = await this.faqsService.getAllFaqs();
    return { faqs: faqs };
  }

  @UseGuards(AuthGuard)
  @Post(routesV1.faqs.root)
  async add(
    @Body() addBlogDto: AddFaqDto,
    @Req() request: AuthenticatedRequest,
  ) {
    const faqs = await this.faqsService.add(addBlogDto, request.session.user);
    return { faqs: faqs };
  }

  @UseGuards(AuthGuard)
  @Delete(routesV1.faqs.root)
  async delete(
    @Body() deleteBlogDto: DeleteFaqDto,
    @Req() request: AuthenticatedRequest,
  ) {
    const faqs = await this.faqsService.delete(
      deleteBlogDto,
      request.session.user,
    );

    return { faqs: faqs };
  }

  @UseGuards(AuthGuard)
  @Put(routesV1.faqs.root)
  async update(
    @Body() updateEventDto: UpdateFaqDto,
    @Req() request: AuthenticatedRequest,
  ) {
    const faqs = await this.faqsService.update(
      updateEventDto,
      request.session.user,
    );

    return { faqs: faqs };
  }
}
