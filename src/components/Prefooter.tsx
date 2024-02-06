import Link from "next/link";

import { AllColors } from "../constants/allColors";

export default function Prefooter() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800" id="content">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10">
        <h1 className="text-1xl text-black font-semibold text-center">
          N'hésitez pas à me contacter pour tous vos projets, aussi irréalisables soit-elles!
        </h1>
      </div>

      {/* <div className="text-center pb-20">
        <Link href="https://github.com/humberni/halley" target="_blank">
          <button className={`${AllColors.mainBgColor} text-white rounded-full px-6 p-3 font-medium`}>
            Obtener proyecto
          </button>
        </Link>
      </div> */}
    </div>
  );
}
