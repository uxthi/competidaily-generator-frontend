import { Form } from "@remix-run/react";
import type { LinksFunction } from '@remix-run/node';
import stylesUrl from '~/styles/competidaily.css';
import resetCssUrl from '~/styles/reset.css';


export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesUrl }, 
    { rel: 'stylesheet', href: resetCssUrl }, 
  ];
};

const PocketBase = require('pocketbase/cjs');

export async function action({ request }) {
  const body = await request.formData();

  const pb = new PocketBase(process.env.POCKET_BASE_URL);
  await pb.admins.authWithPassword(process.env.POCKET_BASE_USER, process.env.POCKET_BASE_PASS);

  const records = await pb.collection(process.env.POCKET_BASE_COLLECTION).create({
    theme: body.get('content'),
    enabled: false,
  });

  return null;
}

export default function NewCompetidailyRoute() {
    return (
      <div>
        <h1>Sugira um novo tema!</h1>
        <Form method="post">
          <div className='input-container'>
            <input placeholder='Seu nome...' type="text" name="name" />
          </div>
          <div className='input-container'>
          <textarea placeholder='Sugestão de tema...' name="content" />
          </div>
          <div>
            <button type="submit" className="button">
              Enviar
            </button>
          </div>
        </Form>
      </div>
    );
  }