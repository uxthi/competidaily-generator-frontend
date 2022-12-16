import { useLoaderData } from '@remix-run/react';
const PocketBase = require('pocketbase/cjs');

export const loader = async () => {
  const pb = new PocketBase(process.env.POCKET_BASE_URL);
  await pb.admins.authWithPassword(process.env.POCKET_BASE_USER, process.env.POCKET_BASE_PASS);

  const records = await pb.collection(process.env.POCKET_BASE_COLLECTION)
    .getFullList(200, {
      sort: '-created',
    })

  return { records };
};

export default function CompetidailyIndexRoute() {
    const data = useLoaderData();

    const getEnabledThemes = () => {
      const allThemes = data.records;
      const filteredThemes: any = []

      allThemes.map((item: any) => {
        if (item.enabled) {
          return filteredThemes.push(item)
        }
        return null;
      })

      console.log('PERMITIDOS >>>', filteredThemes)
      console.log('TODOS OS TEMAS >>>', allThemes)


      return filteredThemes
    }

    return (
      <div>
        Seu tema é: {getEnabledThemes().map((item: any) => <p key={item.theme}>{item.theme}</p>)}
      </div>
    );
  }