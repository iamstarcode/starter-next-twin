import { ReactElement, ReactNode, useState } from 'react'

import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

import GlobalStyles from './../styles/GlobalStyles'
import { Global } from "@emotion/react"
import stylesBase from '../components/stylesBase'
import { ThemeProvider } from "../components/ThemeContext"

import "twin.macro"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode,
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <GlobalStyles />
      <Global styles={stylesBase} />
      <ThemeProvider>
        <div tw="flex flex-col max-w-7xl mx-auto w-full items-center ">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}

