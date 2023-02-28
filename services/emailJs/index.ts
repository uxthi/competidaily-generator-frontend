import emailjs from "@emailjs/browser";
import getConfig from 'next/config';

const sendMail = async (form: any) => {
    let result = 'loading'

    const serviceId = getConfig().publicRuntimeConfig.emailJsServiceID;
    const templateId = getConfig().publicRuntimeConfig.emailJsTemplateID;
    const publicKey = getConfig().publicRuntimeConfig.emailJsPublicKey;

    try {
        const response = await emailjs.sendForm(serviceId, templateId, form, publicKey);
        if (response.status === 200) {
            result = 'success';
        } else {
            result = 'error';
        }
    } catch (error) {
        console.log(error);
        result = 'error';
    }

    return result;
}

export default sendMail;