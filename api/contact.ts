// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { nome, email, telefone, assunto, mensagem } = req.body || {};

    if (!nome || !email || !mensagem) {
      return res.status(400).json({ error: 'Nome, e-mail e mensagem são obrigatórios.' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log("RESEND RESULT:", resend); 

    const { data, error } = await resend.emails.send({
      from: process.env.MAIL_FROM!, // ex: "angelicacarvalho@psicoangelicacarvalho.com.br>"
      to: process.env.MAIL_TO!,     // ex: "psico.aacarvalho@outlook.com"
      subject: assunto ? `Contato: ${assunto}` : `Novo contato de ${nome}`,
      reply_to: email,
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${telefone ? `<p><strong>Telefone:</strong> ${telefone}</p>` : ''}
        ${assunto ? `<p><strong>Assunto:</strong> ${assunto}</p>` : ''}
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, '<br/>')}</p>
      `,
    });

    console.log("RESEND OK id:", data?.id);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err?.message || err);
    console.error(err);
    return res.status(500).json({ error: 'Erro ao enviar e-mail.' });
  }
}
