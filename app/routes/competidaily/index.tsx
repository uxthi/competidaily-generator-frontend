import { useLoaderData } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import stylesUrl from '~/styles/competidaily.css';
import resetCssUrl from '~/styles/reset.css';

const PocketBase = require('pocketbase/cjs');

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesUrl }, 
    { rel: 'stylesheet', href: resetCssUrl }, 
  ];
};

export const loader = async () => {
  const pb = new PocketBase(process.env.POCKET_BASE_URL);
  await pb.admins.authWithPassword(process.env.POCKET_BASE_USER, process.env.POCKET_BASE_PASS);

  const records = await pb.collection(process.env.POCKET_BASE_COLLECTION)
    .getFullList(200, {
      sort: '-created',
    })

    const allThemes = records;
    const filteredThemes: any = []

    allThemes.map((item: any) => {
      if (item.enabled) {
        return filteredThemes.push(item)
      }
      return null;
    })

    console.log('PERMITIDOS >>>', filteredThemes)
    console.log('TODOS OS TEMAS >>>', allThemes)

    const min = Math.ceil(1);
    const max = Math.floor(filteredThemes.length);
    const randomIndex = Math.floor(Math.random() * (max - min) + min);
    const chosenTheme = filteredThemes[randomIndex]

    console.log('index >>>>', randomIndex)
    console.log('chosenTheme >>>>', chosenTheme)

  return { chosenTheme };
};

export default function CompetidailyIndexRoute() {
    const data = useLoaderData();

    return (
      <div>
        <p>Seu tema é: <blockquote key={data.chosenTheme.theme}>{data.chosenTheme.theme}</blockquote></p>
      </div>
    );
  }