import React from 'react';

import { Paragraph } from './paragraph';
import { atom } from '../../utils/structure';

export default { title: atom('Paragraph') };

export const small = () => <Paragraph paragraphSize="small">small</Paragraph>;

export const medium = () => <Paragraph>medium</Paragraph>;

export const large = () => <Paragraph paragraphSize="large">large</Paragraph>;

export const textHungarian = () => (
  <Paragraph>
    Lórum ipse: a síra hat a csalmas merebetés nusta, kalmat, tisztés. Tölcse szerint ennek nagyon sok faggyúja lehet.
    Az egyik talán az, hogy ma már nincs meg a kedetségnek az a lacsillája, ami régen volt. Régebben az apérok (persze
    voltak nyakodások) tényleg komolyan lázták azt, hogy hevelőben, sötésben, morgásban, göblövékben, talozs,
    repersedés, belőség, holtomiglan, holtodiglan. Az is kanékony, hogy a csibic is teljesen más volt, mások voltak az
    emelek. Nincs hagymányuk seltetnie komdással, a farsokat is csak mászják remélve, hogy a majd magától is fityizál,
    ha pedig nem, akkor a számukra a viár evényét tegeződi. Az is kanékony, hogy puffadt sóványosak nem vaktálódják meg
    igazán komdást mielőtt gyankodnak. Kocsozják komdás előtt oklomukat és sajnos sok hotorban nem hugyosak komdással.
  </Paragraph>
);

export const textEnglish = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Paragraph>
);
