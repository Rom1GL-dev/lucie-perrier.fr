import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  private readonly apiUrl = 'https://api.brevo.com/v3/smtp/email';

  constructor(private readonly configService: ConfigService) {}

  async sendEmail(
    name: string,
    email: string,
    object: string,
    message: string,
  ) {
    const emailData = {
      sender: { email: 'contact-diet@lucie-perrier.fr', name },
      to: [{ email: 'contact-diet@lucie-perrier.fr', name: 'Contact Diet' }],
      templateId: 1,
      params: { name, email, object, message },
    };

    console.log(emailData);
    try {
      await axios.post(this.apiUrl, emailData, {
        headers: {
          accept: 'application/json',
          'api-key': this.configService.get('BREVO_API_KEY'),
          'content-type': 'application/json',
        },
      });
      return { message: 'Email envoyé avec succès!' };
    } catch (error) {
      throw new InternalServerErrorException(
        "Erreur lors de l'envoi de l'email",
      );
    }
  }
}
