import Airtable from "airtable";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/id.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Input from "../components/Input/Input";
import CustomizedSnackbars from "../components/SnackBar/SnackBar";

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
];

export default function User({ status, data }) {
  if (status == 200) {
    return (
      <>
        <Head>
          <title>Foundation Program</title>
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
            These are badges you have achieved with you learning efforts till
            now. Keep Leadning and Exoloring more things.
          </p>

          <div className={styles.badgecontainer}>
            {data.tags.map((item) => {
              if (item["url"] != null) {
                console.log(item.url);
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

          <Footer />
        </div>
      </>
    );
  } else {
    console.log(status)
    return (
      <>
        <CustomizedSnackbars />
        <Head>
          <title>Foundation Program - Error</title>
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
      if (err) {
        resolve({
          status: 404,
        });
      }
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
          id: task.id,
          url: url,
        });
      });
      resolve({
        status: 200,
        data,
      });
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
