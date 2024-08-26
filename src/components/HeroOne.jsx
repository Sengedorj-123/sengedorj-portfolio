import { ButtonUm } from "./svg";

export const HeroOne = () => {
  return (
    <div class="w-screen  bg-[#F9FAFB] dark:bg-[#111827]" id="about">
      <div class="container mx-auto py-24 px-4 lg:px-8 bg-[#F9FAFB] dark:bg-[#111827]">
        <div class="flex justify-center mb-12">
          <ButtonUm text="About me" />
        </div>
        <div class="flex flex-col lg:flex-row gap-12">
          <div class="w-full lg:w-1/2">
            <img
              class="w-full h-auto rounded-lg shadow-lg "
              src="./lambo.png"
              alt="About me"
            />
          </div>
          <div class="w-full lg:w-1/2">
            <p class="text-2xl md:text-3xl font-semibold mb-6">
              Curious about me? Here you have it:
            </p>
            <div class="text-gray-700 font-light dark:text-white">
              <p class="mb-4">
                I &#x27;m a designer turned full stack developer, passionate
                about React.js and Node.js. I excel in blending technical and
                visual aspects to craft exceptional digital products,
                prioritizing user experience, precise design, and optimized
                code.
              </p>
              <p class="mb-4">
                Since starting my web development journey in 2015, I &#x27;ve
                embraced challenges and kept up with the latest tech trends. Now
                in my early thirties, seven years in, I &#x27;m building
                cutting-edge web apps using Next.js, TypeScript, NestJS,
                Tailwind CSS, Supabase, and more.
              </p>
              <p class="mb-4">
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty, you
                &#x27;ll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p class="mb-4">Finally, some quick bits about me:</p>
              <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>B.E. in Computer Engineering</li>
                <li>Full-time freelancer</li>
                <li>Align-self: stretch;</li>
              </ul>
              <p>
                One last thing, I &#x27;m available for freelance work, so feel
                free to reach out and say hello! I promise I don &#x27;t bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// align-self: stretch;
{
  /* <SkillBox img={"text"} textt={"typescript"} /> */
}
