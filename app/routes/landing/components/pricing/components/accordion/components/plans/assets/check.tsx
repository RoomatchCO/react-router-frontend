export default function Check({tierIdx}: {tierIdx: number}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={tierIdx == 1 ? 'var(--prussian-blue)' : 'var(--electric-indigo)'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-check`}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
        </svg>
    )
}
