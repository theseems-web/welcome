export default function TextIcon(props) {
    return <a className={"font-bold text-xl"} href={props.href}>
        <div className="flex flex-wrap align-middle justify-center text-center mx-auto space-x-6 mt-5"
             style={{alignItems: 'center', flexFlow: 'row'}}>
            {props.children}
        </div>
    </a>
}