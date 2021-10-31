const className = "h-6 w-6 text-blue-500 dark:text-green-500 transition duration-700 ";

let CvIcon = (props) => {
    return (
        <a href={props.href}>
            <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
        </a>
    )
}

let GithubIcon = (props) => {
    return (
        <a href={props.href}>
            <svg className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                 stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path
                    d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567
                0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723
                 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5
                  6.014-.591.589-.56 1.183-.5 2V21"/>
            </svg>
        </a>
    )
}

let TelegramIcon = (props) => {
    return (
        <a href={props.href}>
            <svg className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                 stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"/>
            </svg>
        </a>
    )
}

let MailIcon = (props) => {
    return (
        <a href={props.href}>
            <svg className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                 stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <polyline points="3 7 12 13 21 7"/>
            </svg>
        </a>
    )
}

function IconList() {
    return (
        <div className="flex flex-wrap align-middle justify-center text-center mx-auto space-x-6 mt-5">
            <CvIcon href={"//theseems.ru/cv"}/>
            <GithubIcon href={"//theseems.ru/github"}/>
            <TelegramIcon href={"//theseems.ru/telegram"}/>
            <MailIcon href={"mailto:me@theseems.ru"}/>
        </div>
    )
}

export default IconList;