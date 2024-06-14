import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        if (contacts.length > 1) {
            const contactsWithoutLast = contacts.slice(0, -1);
            await fs.writeFile(PATH_DB, JSON.stringify(contactsWithoutLast));
        }
    } catch (error) {
        console.log(error);
    }
};

await removeLastContact();
