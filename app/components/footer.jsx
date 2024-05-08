export default function Footer() {

    const footerNavs = [
        {
            id: 1,
            href: '#',
            name: 'Terms'
        },
        {
            id: 2,
            href: '#',
            name: 'License'
        },
        {
            id: 3,
            href: '#',
            name: 'Privacy'
        },
        {
            id: 4,
            href: '/about',
            name: 'About us'
        }
    ]
    return (
        <footer className="mt-10 bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
                <div className="flex flex-col gap-4 mt-4 py-5 md:text-center">
                        <div className="space-y-6">
                            <ul className="flex flex-wrap items-center justify-center gap-4 sm:text-base">
                                {
                                    footerNavs.map((item) => (
                                        <li key={item.id} className="text-white">
                                            <a href={item.href}>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div> 
                    <p className="text-sm text-center">© 2023 Reecoplastghana. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}