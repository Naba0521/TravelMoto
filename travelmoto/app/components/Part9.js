import Image from "next/image";

export const Part9 = () => {
  return (
    <div className="flex flex-col w-[100%] bg-[#0F0F0F]">
      <div className="w-[100%] flex flex-row bg-[#0F0F0F]">
        <div className="flex-1">
          <Image
            src="/image27.png"
            alt="Living Nowhere"
            width={982}
            height={982}
            className="w-[100%] h-[982px]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[50px] justify-center">
          <div className="flex flex-col pl-[120px] gap-[15px]">
            <div className="text-[40px] text-[#FC6220] font-medium">
              LIVING NOWHERE
            </div>
            <div className="text-[18px] text-[#FFFFFF] font-bold">
              Feeling welcomed.
            </div>
          </div>
          <ul className="flex flex-col gap-[30px] text-[18px] text-[#FFFFFF] font-light pl-[92px] w-[524px]">
            <li className="ml-[20px] text-justify">
              Nomadic living has remained part of Mongolian life for millennia.
              Half the country&apos;s population still chooses to live in
              traditional ger tents. It&apos;s in their DNA to wander.
            </li>
            <li className="ml-[20px]">
              A stay in a ger tent offers you the opportunity to experience a
              time-honored way of life and provides the perfect base from which
              to explore Mongolia&apos;s majestic landscapes.
            </li>
            <li className="ml-[20px]">
              Ger tents are well insulated but lightweight to protect against
              all weathers yet still be quick to dismantle and packed away,
              making it easy to move freely and find better grazing lands.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex pl-[118px] pb-[60px] pt-[60px] pr-[118px] gap-[20px]">
        <div className="flex-1">
          <Image
            src="/image66.png"
            alt="Sleep in the Wild"
            width={513}
            height={513}
            className="w-[100%] h-[513px]"
          />
          <div className="text-white flex flex-col gap-[16px] text-[18px] font-normal">
            <div>SLEEP IN THE WILD</div>
            <div>
              Experience nomadic culture. Everyday a new camp and a different
              view.
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/image67.png"
            alt="Breakfast, Lunch, and Dinner"
            width={513}
            height={513}
            className="w-[100%] h-[513px]"
          />
          <div className="text-white flex flex-col gap-[16px] text-[18px]  font-normal">
            <div>BREAKFAST, LUNCH AND DINNER</div>
            <div>Serve always with a view</div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/image68.png"
            alt="Ger Living"
            width={513}
            height={513}
            className="w-[100%] h-[513px]"
          />
          <div className="text-white flex flex-col gap-[16px] text-[18px] font-normal">
            <div>GER LIVING</div>
            <div>
              This ger tent is so unique, sleeping in one of them will make you
              wonder why you don&apos;t have one in your lawn already.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
