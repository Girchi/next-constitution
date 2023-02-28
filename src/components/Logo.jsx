import Image from "next/image";

export function Logo(props) {
  return (
    <Image width={30} height={36} src="/logo.png" alt="Logo" style={{maxHeight: '35px !important'}} />
  )
}
