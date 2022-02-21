import {Parallax} from "react-parallax";
import {CheckIcon} from '@heroicons/react/outline'
import {useState} from 'react'
import {Switch} from '@headlessui/react'

const images = [
    {src: "img/2.jpg"},
    {src: "img/3.jpg"},
    {src: "img/1.jpg"},
    {src: "img/4.jpg"},
    {src: "img/6.jpg"},
]
const incentives = [
    {
        name: 'Free shipping',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
        name: '10-year warranty',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
        name: 'Exchanges',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
            "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
]
const features = [
    {
        name: 'Sleek design',
        description:
            'The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.',
    },
    {name: 'Comfort handle', description: 'Shaped for steady pours and insulated to prevent burns.'},
    {
        name: 'One-button control',
        description:
            'The one button control has a digital readout for setting temperature and turning the kettle on and off.',
    },
    {name: 'Long spout', description: "Designed specifically for controlled pour-overs that don't slash or sputter."},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const hobbyFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const scaleFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const growthFeatures = [
    'Quia rem est sed impedit magnam',
    'Dolorem vero ratione voluptates',
    'Qui sed ab doloribus voluptatem dolore',
    'Laborum commodi molestiae id et fugiat',
    'Nam ut ipsa nesciunt culpa modi dolor',
]
const products = [
    {
        id: 1,
        name: 'Basic Tee 8-Pack',
        href: '#',
        price: '$256',
        description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
        options: '8 colors',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
        imageAlt: 'Front of plain black t-shirt.',
    },
    // More products...
]
import { CameraIcon } from '@heroicons/react/solid'
export default function Home() {
    const [agreed, setAgreed] = useState(false)
    return (

        <div className="bg-slate-300">
<h1 className="mx-5 py-5 text-7xl leading-8 font-extrabold tracking-tight text-gray-900"> Dreamscape Photography</h1>
            <div className="bg-transparent overflow-hidden">
                <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                    <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                        <div>
                            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Custom Photography</h2>
                            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Meet Whitney
                            </h3>
                        </div>
                    </div>
                    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:row-start-1 lg:col-start-2">
                            <svg
                                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                            </svg>
                            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                <figure>
                                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                        <img
                                            className="rounded-lg shadow-lg object-cover object-center"
                                            src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                                            alt="Whitney leaning against a railing on a downtown street"
                                            width={1184}
                                            height={1376}
                                        />
                                    </div>
                                    <figcaption className="mt-3 flex text-sm text-gray-500">
                                        <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2">Photograph by xxxxxx</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                <p className="text-lg text-gray-500">
                                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                                    pellentesque. Blandit amet, sed aenean erat arcu morbi.
                                </p>
                            </div>
                            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                <p>
                                    Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                                    pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
                                </p>
                                <p>
                                    Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet
                                    fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.
                                </p>
                                <p>
                                    Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.
                                </p>
                                <ul role="list">
                                    <li>Quis elit egestas venenatis mattis dignissim.</li>
                                    <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                                    <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                                </ul>
                                <p>
                                    Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                                    velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                                    egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                                </p>
                                <h3>How we helped</h3>
                                <p>
                                    Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                                    Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,
                                    lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
                                </p>
                                <p>
                                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                                    pellentesque. Blandit amet, sed aenean erat arcu morbi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Parallax className="min-h-screen relative" bgImage={images[0].src} strength={-300}>
                {/*<div className="bg-transparent mt-9 py-16 lg:py-24">*/}
                {/*    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
                {/*        <div className="relative py-24 px-8 bg-indigo-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">*/}
                {/*            <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">*/}
                {/*                <img*/}
                {/*                    src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"*/}
                {/*                    alt=""*/}
                {/*                    className="w-full h-full object-cover"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            <div className="relative lg:col-span-1">*/}
                {/*                <img className="h-12 w-auto"*/}
                {/*                     src="https://tailwindui.com/img/logos/workcation-logo-white.svg"*/}
                {/*                     alt=""/>*/}
                {/*                <blockquote className="mt-6 text-white">*/}
                {/*                    <p className="text-xl font-medium sm:text-2xl">*/}
                {/*                        Workflow has completely transformed how we interact with customers. We've seen*/}
                {/*                        record bookings, higher*/}
                {/*                        customer satisfaction, and reduced churn.*/}
                {/*                    </p>*/}
                {/*                    <footer className="mt-6">*/}
                {/*                        <p className="flex flex-col font-medium">*/}
                {/*                            <span>Marie Chilvers</span>*/}
                {/*                            <span>CEO, Workcation</span>*/}
                {/*                        </p>*/}
                {/*                    </footer>*/}
                {/*                </blockquote>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Parallax>

            <div className="bg-transparent">
                <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
                    <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
                        <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
                            <div>
                                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                                    We built our business on great customer service
                                </h2>
                                <p className="mt-4 text-gray-500">
                                    At the beginning at least, but then we realized we could make a lot more money if we
                                    kinda stopped
                                    caring about that. Our new strategy is to write a bunch of things that look really
                                    good in the
                                    headlines, then clarify in the small print but hope people don&apos;t actually read it.
                                </p>
                            </div>
                            <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                                    alt=""
                                    className="object-center object-cover"
                                />
                            </div>
                        </div>
                        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                            {incentives.map((incentive) => (
                                <div key={incentive.name} className="sm:flex lg:block">
                                    <div className="sm:flex-shrink-0">
                                        <img className="w-16 h-16" src={incentive.imageSrc} alt=""/>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                                        <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                                        <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Parallax className="min-h-screen relative" bgImage={images[1].src} strength={-1000}>
                <div className="max-w-7xl mx-auto px-4 my-4 rounded-xl sm:px-6 lg:px-8 bg-transparent">
                    <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
                        <div className="text-center">
                            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Pricing</h2>
                            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                                The right price for you, whoever you are
                            </p>
                            <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos
                                odit doloribus
                                molestiae voluptatum.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 bg-transparent  lg:mt-20 ">
                        <div className="relative z-0">
                            <div className="absolute inset-0 h-5/6 bg-transparent lg:h-2/3"/>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="relative lg:grid lg:grid-cols-7">
                                    <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                                        <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                                            <div className="flex-1 flex flex-col">
                                                <div className="bg-white px-6 py-10">
                                                    <div>
                                                        <h3 className="text-center text-2xl font-medium text-gray-900"
                                                            id="tier-hobby">
                                                            Hobby
                                                        </h3>
                                                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span className="font-extrabold">79</span>
                          </span>
                                                            <span className="text-xl font-medium text-gray-500">/month</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                                                    <ul role="list" className="space-y-4">
                                                        {hobbyFeatures.map((feature) => (
                                                            <li key={feature} className="flex items-start">
                                                                <div className="flex-shrink-0">
                                                                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500"
                                                                               aria-hidden="true"/>
                                                                </div>
                                                                <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="mt-8">
                                                        <div className="rounded-lg shadow-md">
                                                            <a
                                                                href="#"
                                                                className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                                                                aria-describedby="tier-hobby"
                                                            >
                                                                Start your trial
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                                        <div className="relative z-10 rounded-lg shadow-xl">
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                                                aria-hidden="true"
                                            />
                                            <div className="absolute inset-x-0 top-0 transform translate-y-px">
                                                <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Most popular
                      </span>
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                                                <div>
                                                    <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                                                        id="tier-growth">
                                                        Growth
                                                    </h3>
                                                    <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                          <span className="font-extrabold">149</span>
                        </span>
                                                        <span className="text-2xl font-medium text-gray-500">/month</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                                                <ul role="list" className="space-y-4">
                                                    {growthFeatures.map((feature) => (
                                                        <li key={feature} className="flex items-start">
                                                            <div className="flex-shrink-0">
                                                                <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500"
                                                                           aria-hidden="true"/>
                                                            </div>
                                                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="mt-10">
                                                    <div className="rounded-lg shadow-md">
                                                        <a
                                                            href="#"
                                                            className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                                                            aria-describedby="tier-growth"
                                                        >
                                                            Start your trial
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                                        <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                                            <div className="flex-1 flex flex-col">
                                                <div className="bg-white px-6 py-10">
                                                    <div>
                                                        <h3 className="text-center text-2xl font-medium text-gray-900"
                                                            id="tier-scale">
                                                            Scale
                                                        </h3>
                                                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span className="font-extrabold">349</span>
                          </span>
                                                            <span className="text-xl font-medium text-gray-500">/month</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                                                    <ul role="list" className="space-y-4">
                                                        {scaleFeatures.map((feature) => (
                                                            <li key={feature} className="flex items-start">
                                                                <div className="flex-shrink-0">
                                                                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500"
                                                                               aria-hidden="true"/>
                                                                </div>
                                                                <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="mt-8">
                                                        <div className="rounded-lg shadow-md">
                                                            <a
                                                                href="#"
                                                                className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                                                                aria-describedby="tier-scale"
                                                            >
                                                                Start your trial
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className="pb-16 bg-transparent lg:pb-0 lg:z-10 lg:relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="relative lg:-my-8">
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"/>
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                <img
                                    className="object-cover lg:h-full lg:w-full"
                                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                            <blockquote>
                                <div>
                                    <svg
                                        className="h-12 w-12 text-gray-900  opacity-25"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                    </svg>
                                    <p className="mt-6 text-2xl font-medium text-gray-900 ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae
                                        laoreet augue. Amet
                                        feugiat est integer dolor auctor adipiscing nunc urna, sit.
                                    </p>
                                </div>
                                <footer className="mt-6">
                                    <p className="text-base font-medium text-gray-900 ">Judith Black</p>
                                    <p className="text-base font-medium text-indigo-100">CEO at PureInsights</p>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>

            <Parallax className="min-h-screen relative" bgImage={images[2].src} strength={-700}>

            </Parallax>

            {/*<div className="bg-transparent">*/}
                <div className="bg-transparent max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="bg-transparent grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
                        <div>
                            <div className="border-b border-gray-200 pb-10">
                                <h2 className="font-medium text-gray-500">Machined Kettle</h2>
                                <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Elegant simplicity
                                </p>
                            </div>

                            <dl className="mt-10 space-y-10">
                                {features.map((feature) => (
                                    <div key={feature.name}>
                                        <dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
                                        <dd className="mt-3 text-sm text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div>
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/product-feature-09-main-detail.jpg"
                                    alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-01.jpg"
                                        alt="Detail of temperature setting button on kettle bass with digital degree readout."
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-02.jpg"
                                        alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*</div>*/}

            <Parallax className="min-h-screen relative" bgImage={images[3].src} strength={-1000}>

            </Parallax>

            <div className="bg-transparent py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <svg
                        className="absolute left-full transform translate-x-1/2"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"/>
                    </svg>
                    <svg
                        className="absolute right-full bottom-0 transform -translate-x-1/2"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"/>
                    </svg>
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact
                            sales</h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
                            Sapien tortor lacus
                            arcu.
                        </p>
                    </div>
                    <div className="mt-12">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                    Company
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        autoComplete="organization"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                            Country
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                        >
                                            <option>US</option>
                                            <option>CA</option>
                                            <option>EU</option>
                                        </select>
                                    </div>
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder="+1 (555) 987-6543"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="mt-1">
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    defaultValue={''}
                />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <Switch
                                            checked={agreed}
                                            onChange={setAgreed}
                                            className={classNames(
                                                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span className="sr-only">Agree to policies</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    agreed ? 'translate-x-5' : 'translate-x-0',
                                                    'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base text-gray-500">
                                            By selecting this, you agree to the{' '}
                                            <a href="#" className="font-medium text-gray-700 underline">
                                                Privacy Policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="#" className="font-medium text-gray-700 underline">
                                                Cookie Policy
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Let&apos;s talk
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Parallax className="min-h-screen relative" bgImage={images[4].src} strength={-400}>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                            >
                                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                                    />
                                </div>
                                <div className="flex-1 p-4 space-y-2 flex flex-col">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-gray-500">{product.description}</p>
                                    <div className="flex-1 flex flex-col justify-end">
                                        <p className="text-sm italic text-gray-500">{product.options}</p>
                                        <p className="text-base font-medium text-gray-900">{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Parallax>





        </div>
    )
}