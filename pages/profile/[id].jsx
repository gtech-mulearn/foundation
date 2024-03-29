import Airtable from "airtable";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/id.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import CustomizedSnackbars from "../../components/SnackBar/SnackBar";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

let base = new Airtable({ apiKey: process.env.airtableKey }).base(
  process.env.tfpBase
);
let meta = [
  {
    id: "learner",
    check: "discord_status",
    image: "learner-badge",
  },
  {
    id: "scratch",
    check: "tfp-scratch",
    image: "scratch-badge",
  },
  {
    id: "cmd",
    check: "tfp-command-line",
    image: "cmd-badge",
  },
  {
    id: "git",
    check: "tfp-git-github",
    image: "git-badge",
  },
  {
    id: "html",
    check: "tfp-html-css",
    image: "html-badge",
  },
  {
    id: "js",
    check: "tfp-javascript",
    image: "js-badge",
  },
];

export default function User({ status, data }) {
  const router = useRouter();
  const { id } = router.query;
  const [twitter, setTwitter] = useState("");
  const [wa, setWa] = useState("");
  useEffect(() => {
    let twitterBase = "https://twitter.com/intent/tweet?text=";
    let waBase = "https://api.whatsapp.com/send?text=";

    let twitterContent = encodeURI(
      `Check out my Achievements with The Foundation Program by @GtechMulearn\n\nhttps://foundation.mulearn.org/profile/${id}\n\n&hashtags=TFPmulearn`
    );

    let waContent = encodeURI(
      `Check out my Achievements with The Foundation Program by GTech Mulearn\n\nhttps://foundation.mulearn.org/profile/${id}`
    );

    setTwitter(`${twitterBase}${twitterContent}`);
    setWa(`${waBase}${waContent}`);
  }, []);
  if (status == 200) {
    return (
      <>
        <Head>
          <title>The Foundation Program</title>
          <meta
            name="description"
            content="Welcome to The Foundation Program Website, Enter your foundaton program Id and view all the badges you have aquired untill now in the program"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className={styles.main}>
          <Navbar />

          <p className={styles.name}>
            Congratulations, <span>{data.name}</span>
          </p>
          <p className={styles.description}>
            Woohoo! That’s one hell of a collection of badges you have there!
            Feel like there are missing badges? If so, you either haven’t
            completed an assignment or we missed your submission, in which case
            do ping us on Discord.
          </p>

          <div className={styles.badgecontainer}>
            {data.tags.map((item) => {
              if (item["url"] != null) {
                return (
                  <>
                    <div
                      key={item.id}
                      style={{
                        margin: "auto",
                      }}
                    >
                      <Image
                        src={item.url}
                        style={{
                          boxShadow: "2px 1px 20px 0px rgba(255,255,255,0.56);",
                        }}
                        alt="badge"
                        width={300}
                        height={300}
                        objectFit="contain"
                      />
                    </div>
                  </>
                );
              }
            })}
          </div>

          <div className={styles.share}>
            <a target="_blank" href={twitter} rel="noopener noreferrer">
              <button className={styles.twitter}>Share to Twitter</button>
            </a>
            <a target="_blank" href={wa} rel="noopener noreferrer">
              <button className={styles.whatsapp}>Share to Whatsapp</button>
            </a>
          </div>

          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <>
        <CustomizedSnackbars />
        <Head>
          <title>The Foundation Program - Error</title>
          <meta
            name="description"
            content="Welcome to The Foundation Program Website, Enter your foundaton program Id and view all the badges you have aquired untill now in the program"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className={styles.main}>
          <Navbar />
          <Input />
          <Footer />
        </div>
      </>
    );
  }
}

export const getServerSideProps = async (context) => {
  let user_id = context.params.id;
  let prom = new Promise((resolve, reject) => {
    base("Primer").find(user_id, function (err, record) {
      console.log(err);
      if (err) {
        resolve({
          status: 404,
        });
      } else {
        let data = {};
        data.name = record.get("Name");
        data.tags = [];
        meta.forEach((task) => {
          console.log(task);
          let url = record.get(task.image);
          if (url == undefined) {
            url = null;
          }
          data.tags.push({
            key: task.id,
            id: task.id,
            url: url,
          });
        });
        resolve({
          status: 200,
          data,
        });
      }
    });
  });

  let result = await prom.then((data) => {
    return data;
  });

  console.log(result);
  return {
    props: result,
  };
};
