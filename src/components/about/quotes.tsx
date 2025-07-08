import type { FC } from "react";

export const Quotes: FC = () => {
  return (
    <section className="w-full gap-y-5 flex flex-col items-center justify-center my-20 px-20 lg:px-0">
      <svg
        width="52"
        height="42"
        viewBox="0 0 52 42"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49.8105 0.519897C50.8626 0.519897 51.5999 1.32118 51.5999 2.21718C51.5999 2.85206 51.2287 3.53558 50.3276 4.0143C45.7503 6.44118 40.4511 14.8329 40.4511 20.0092C48.1721 19.7737 51.5257 26.6191 51.5257 30.9097C51.5257 36.0476 47.0764 41.4799 40.4972 41.4799C32.2028 41.4799 28.1324 34.9596 28.1324 27.894C28.1324 12.5852 45.6274 0.519897 49.8105 0.519897ZM22.078 0.519897C23.1276 0.519897 23.8674 1.32118 23.8674 2.21718C23.8674 2.85206 23.4962 3.53558 22.5951 4.0143C18.0178 6.44118 12.7186 14.8329 12.7186 20.0092C20.4396 19.7737 23.7932 26.6191 23.7932 30.9097C23.7932 36.0476 19.3413 41.4799 12.7647 41.4799C4.46774 41.4799 0.399902 34.9596 0.399902 27.894C0.399902 12.5852 17.8924 0.519897 22.078 0.519897Z"
          fill="currentColor"
        />
      </svg>

      <div className="max-w-5xl text-center italic text-2xl mt-5">
        Working with him was like pairing with a Swiss Army knife — sharp,
        adaptable, and somehow always calm under pressure
      </div>

      <div className="text-gray-600 dark:text-gray-300">
        - Jordan Easterling, CEO at Building Swell
      </div>
    </section>
  );
};
