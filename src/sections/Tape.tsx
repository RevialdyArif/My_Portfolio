import { Fragment } from "react";
import StarIcon from "../assets/icons/star.svg";

const word = [
  "About Me",
  "Who I Am",
  "Get to Know Me",
  "Personal Overview",
  "The Core of Who I Am",
  "Discover Me",
  "Snapshot of Me",
  "Inside My World",
  "The Story So Far",
  "Who I’ve Become",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1 ">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:25s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
              {word.map((word) => {
                return (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className='size-6 text-gray-900 -rotate-12' />
                  </div>
                );
              })}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
