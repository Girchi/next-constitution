import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { UsersIcon } from '@/components/icons/UsersIcon'

const resources = [
  {
    href: '/ambavi-i',
    name: 'ამბავი პირველი  - რწმენის შესახებ',
    description:
      'გვწამს, რომ თითოეული ადამიანი არის სამყაროში ყველაზე ღირებული არსება და წესები მათზე თანაბრად უნდა ვრცელდებოდეს.      ',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/ambavi-ii',
    name: 'ამბავი მეორე - ადამიანის შესახებ',
    description:
      'ადამიანს ეკუთვნის საკუთარი სხეული და სიცოცხლე. მას და მხოლოდ მას შეიძლება ჰქონდეს უფლებები და პასუხისმგებლობები.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/ambavi-iii',
    name: 'ამბავი მესამე — გირჩის საზოგადოების შესახებ',
    description:
      'გირჩის საზოგადოება შედგება მსგავსი ღირებულებების მქონე წევრებისგან. ჩვენი მთავარი მიზანი ისეთი წესრიგის ჩამოყალიბებაა, რომელიც გვიცავს და გვეხმარება თავისუფლების საზღვრების გაფართოებაში.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/ambavi-iv',
    name: 'ამბავი მეოთხე — სახელმწიფოს შესახებ',
    description:
      'ძალადობებს შორის ყველაზე საშიში „სახელმწიფოს“ სახელით ძალადობაა.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/ambavi-v',
    name: 'ამბავი მეხუთე — მტყუან-მართლის შესახებ',
    description:
      'გირჩის საზოგადოებაში კონფლიქტები წყდება საუბრით. თუ კონფლიქტის გადაწყვეტა სიტყვით ვერ ხერხდება, საუბარი გრძელდება მსაჯული-მოსამართლის თანდასწრებით. ',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/ambavi-vi',
    name: 'ამბავი მეექვსე — გირჩის საზოგადოების წარმომადგენლობის შესახებ',
    description:
      'გირჩს მშვიდობიანობის დროს წარმოადგენს სათათბირო და მის მიერ არჩეული თავკაცი. სათათბირო არის გირჩის მმართველი საბჭოს მემკვიდრე და ის კომპლექტდება მმართველი საბჭოს წევრთა დაკომპლექტების ტრადიციული წესით.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/ambavi-vii',
    name: 'ამბავი მეშვიდე - მეფისა და მთავარი მღვდელმსახურის შესახებ',
    description:
      'ძნელბედობისას, მეფესა და მთავარ მღვდელმსახურს აქვთ შეუზღუდავი უფლებები და ერთობლივად შეუძლიათ ნებისმიერი გადაწყვეტილების მიღება საკონსტიტუციო წესრიგის აღსადგენად.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/ambavi-viii',
    name: 'ამბავი მერვე - ქართული დოლარის (GeD) შესახებ',
    description:
      '100 წლის წინ ბოლშევიკებმა ჩვენი წინაპრებისთვის ცხოვრების ახალი წესები დაადგინეს — აკრძალეს კერძო საკუთრება და, შესაბამისად, თავისუფლებაც. მაშინ წართმეული ქონების დიდ ნაწილს დღეს „სახელმწიფო საკუთრებას“ ვუწოდებთ.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/ambavi-ix',
    name: 'ამბავი მეცხრე - კონსტიტუციის შესახებ',
    description:
      'ამ კონსტიტუციის აღიარება არის გირჩის საზოგადოებაში გაწევრიანების აუცილებელი წინაპირობა.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/ambavi-ix',
    name: 'ამბავი მეათე - ანდერძის შესახებ',
    description:
      'გირჩის საზოგადოებაში ნებისმიერი გზით ფულის შოვნა დასაშვებია, გარდა სინდისის გაყიდვისა.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  
]

function ResourceIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400" />
    </div>
  )
}

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pt-16 pb-4">
        <ResourceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="table-of-contents">
        სარჩევი
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-2">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
