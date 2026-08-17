import Divider from "@/components/common/Divider";
import LinkExternal from "@/components/common/LinkExternal";
import SubTitle from "@/components/common/SubTitle";
import Title from "@/components/common/Title";
import SubHeader from "@/components/layout/SubHeader";
import {
  activities,
  careers,
  educations,
  intro,
  projects,
  skills,
  type IResumeItem,
} from "./resume.const";

export const metadata = {
  title: "About",
  description: "이도원, 프론트엔드 개발자",
};

const ResumeItem = ({ item }: { item: IResumeItem }) => {
  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-x-[0.5rem]">
        <h4 className="text-lg font-semibold">
          {item.titleLink ? (
            <LinkExternal href={item.titleLink}>{item.title}</LinkExternal>
          ) : (
            item.title
          )}
        </h4>
        <span className="text-sm text-gray-4">{item.period}</span>
      </div>

      {item.description && (
        <p className="mt-[0.2rem] text-base text-gray-4">{item.description}</p>
      )}

      {item.stack && (
        <ul className="mt-[0.5rem] flex flex-wrap gap-[0.3rem]">
          {item.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-[0.3rem] bg-slate-100 px-[0.4rem] py-[0.1rem] text-xs text-gray-4"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-[0.7rem] list-disc space-y-[0.3rem] pl-[1.2rem] text-base leading-relaxed">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Page = () => {
  return (
    <section className="mx-[1rem] mb-[10rem] pc:mx-auto pc:w-[50rem]">
      <SubHeader />

      <Title>이도원</Title>

      <div className="space-y-[0.7rem] text-base leading-relaxed">
        <p className="font-semibold">Frontend Developer</p>
        {intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <Divider className="my-[3rem]" />

      <SubTitle>Careers</SubTitle>
      <div className="space-y-[3rem]">
        {careers.map((career) => (
          <div key={career.company}>
            <div className="flex flex-wrap items-baseline gap-x-[0.5rem]">
              <h3 className="text-xl font-bold">{career.company}</h3>
              <span className="text-base text-gray-4">{career.role}</span>
              <span className="text-sm text-gray-4">{career.period}</span>
            </div>
            <p className="mt-[0.3rem] text-base leading-relaxed">
              {career.summary}
            </p>

            <div className="mt-[1.5rem] space-y-[2rem] border-l-[0.1rem] border-slate-200 pl-[1rem]">
              {career.items.map((item) => (
                <ResumeItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Divider className="my-[3rem]" />

      <SubTitle>Projects</SubTitle>
      <div className="space-y-[2rem]">
        {projects.map((project) => (
          <ResumeItem key={project.title} item={project} />
        ))}
      </div>

      <Divider className="my-[3rem]" />

      <SubTitle>Skills</SubTitle>
      <ul className="list-disc space-y-[0.3rem] pl-[1.2rem] text-base leading-relaxed">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <Divider className="my-[3rem]" />

      <SubTitle>Activities</SubTitle>
      <ul className="space-y-[0.3rem] text-base leading-relaxed">
        {activities.map(({ period, content }) => (
          <li key={content} className="flex flex-wrap gap-x-[0.7rem]">
            <span className="text-gray-4">{period}</span>
            <span>{content}</span>
          </li>
        ))}
      </ul>

      <Divider className="my-[3rem]" />

      <SubTitle>Education</SubTitle>
      <ul className="space-y-[0.3rem] text-base leading-relaxed">
        {educations.map(({ period, content }) => (
          <li key={content} className="flex flex-wrap gap-x-[0.7rem]">
            <span className="text-gray-4">{period}</span>
            <span>{content}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Page;
