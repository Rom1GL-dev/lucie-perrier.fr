import {NextRequest, NextResponse} from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
    if (request.method !== 'POST') {
        return NextResponse.json({ error: 'Méthode non autorisée' }, { status: 405 });
    }

    const { name, email, object, message } = await request.json();
    const apiKey = process.env.BREVO_API_KEY;  // Remplace avec ta clé API Brevo
    const apiUrl = "https://api.brevo.com/v3/smtp/email";

    const emailData = {
        sender: { email: 'contact-diet@lucie-perrier.fr', name: name },
        to: [{ email: 'contact-diet@lucie-perrier.fr', name: 'Contact Diet' }],
        templateId: 1,
        params: { name, email, object, message }
    };

    try {
        await axios.post(apiUrl, emailData, {
            headers: {
                'accept': 'application/json',
                'api-key': apiKey,
                'content-type': 'application/json',
            },
        });
        return NextResponse.json({ message: 'Email envoyé avec succès!' }, { status: 200 });
    } catch {
        return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
    }
}
