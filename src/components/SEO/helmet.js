/** @format */

import React from 'react'
import { Helmet } from 'react-helmet'

export default function SEO({follow = true,lang,title,metaDescription,pathname,image,children}) {
    return (
        <Helmet
            htmlAttributes={ {
                lang: lang || 'en'
            } }
            title={
                title
                    ? title
                    : 'No title'
            }
            titleTemplate={ `${ title ? title :
                'No title' }` }
            meta={ [
                {
                    name: 'description',
                    content:
                        metaDescription  ? metaDescription : ''
                },
                {
                    property: 'og:title',
                    content: title
                        ? title
                        : 'No title'
                },
                {
                    property: 'og:url',
                    content: 'https://somewhere.com'
                },

                {
                    property: 'og:description',
                    content:
                        metaDescription ? metaDescription :''
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    name: 'twitter:card',
                    content: 'summary'
                },
                {
                    name: 'twitter:creator',
                    content: '@codemon_'
                },
                {
                    name: 'twitter:title',
                    content: title
                        ? title
                        : 'No title'
                },
                {
                    name: 'og:site_name',
                    content: 'name'
                },
                {
                    name: 'og:locale',
                    content: 'en'
                },
                {
                    name: 'og:image',
                    content:
                        image ||
                        ''
                },
                {
                    name: 'twitter:description',
                    content:
                        metaDescription ? metaDescription : ''
                }
            ] }>
            {children}
            <link
                rel="canonical"
                href={ `https://somewhere/${ pathname || '' }` }
            />
            <meta
                name="robots"
                content={ follow ? 'follow' : 'nofollow,noindex' }
            />
        </Helmet>
    )
}
