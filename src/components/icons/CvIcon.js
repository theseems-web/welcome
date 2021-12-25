export default function CvIcon(props) {
    return (
        <a href={props.href}>
            <svg className={props.className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                 stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
        </a>
    )
}