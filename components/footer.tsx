"use client"

const YEAR = new Date().getFullYear()

export function Footer() {
    return <small style={{ display: 'block', marginTop: '8rem' }}>
        <time>{YEAR}</time> © Hendrick Sumeck.
        {/*<a href="/feed.xml">RSS</a>*/}
        <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
}