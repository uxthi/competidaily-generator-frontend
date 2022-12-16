import { Form } from "@remix-run/react";
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
        <p>Sugira um novo tema!</p>
        <Form method="post">
          <div>
            <label>
              Seu nome: <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Um tema bem legal*: <textarea name="content" />
            </label>
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