

import Router from 'next/router';

export async function protectPage(url, ctx) {
    const baseURL = process.env.NODE_ENV === 'development' ? process.env.devURL: process.env.prodURL;
    // const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000': 'https://foate.herokuapp.com';
    const cookie = ctx.req.headers.cookie;

    const resp = await fetch(url, {
        headers: {
            cookie: cookie
        }
    });

    if(resp.status === 401 && !ctx.req) {
        Router.replace('/');
        return null;
    }

    if(resp.status === 401 && ctx.req) {
        ctx.res?.writeHead(302, {
            Location: `${baseURL}`
        });
        ctx.res?.end();
        return null;
    }
    
    const json = await resp.json();
    return json;
}