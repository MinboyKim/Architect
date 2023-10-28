import { useMediaQuery } from "react-responsive";

import Section from "./Section";
import Experience from "./Experience";
import Internship from "./Internship";
import Introduction from "./Introduction";
import { curriculumVitae, extraCurricular } from "../../db";

import style from "./Profile.module.css";

const Profile = (props) => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        <div className={style.wrapper}>
            {props.popup ? (
                ""
            ) : (
                <div className={!isMobile ? style.sections : style.mSections}>
                    <div className={style.title}>
                        <span>Curriculum</span>
                        <br />
                        <span>Vitae</span>
                    </div>
                    <Section name="PROFILE">
                        <Introduction />
                    </Section>
                    {curriculumVitae.map((section, index) => {
                        return (
                            <div key={index} style={{ width: "100%" }}>
                                <Section name={section.name}>
                                    {section.experiences.map(
                                        (experience, index) => {
                                            return (
                                                <div key={index}>
                                                    <Experience
                                                        key={index}
                                                        year={experience.year}
                                                        title={experience.title}
                                                        description={
                                                            experience.description
                                                        }
                                                        detail={
                                                            experience.detail
                                                        }
                                                    />
                                                    {section.name ===
                                                        "ACHIEVEMENTS" &&
                                                        section.year !==
                                                            "2019" && <br />}
                                                </div>
                                            );
                                        }
                                    )}
                                </Section>
                            </div>
                        );
                    })}
                    <Section name="EXPERIENCE">
                        <Internship />
                    </Section>
                    <Section name="EXTRA CURRICULAR">
                        {extraCurricular.map((experience, index) => {
                            return (
                                <Experience
                                    key={index}
                                    year={experience.year}
                                    title={experience.title}
                                    description={experience.description}
                                    detail={experience.detail}
                                />
                            );
                        })}
                    </Section>
                    <Experience
                        year="SKILLS"
                        title="AutoCAD / SketchUp / Rhino / Revit / Enscape / Photoshop / Illustrator ..."
                        description=""
                        detail=""
                    />
                </div>
            )}
        </div>
    );
};

export default Profile;
