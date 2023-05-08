const { createReadStream } = require("fs");
const { parse } = require("csv-parse");

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://pmnheefvlstnqzetbywg.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const filePath = "../../Downloads/nsf_funding.csv";

let csvData = [];
let i = 0;

createReadStream(filePath)
  .pipe(parse({ delimiter: "," }))
  .on("data", async function (grant) {
    const grantInfo = {
      title: grant[0],
      description: grant[1],
      award_type: grant[2],
      next_due_date: grant[4],
      program_id: grant[5] || 0,
      nsf_pd_num: grant[6],
      posted_date: grant[8],
      url: grant[9],
      type: grant[10],
      solicitation_url: grant[11],
    };
    i++;
    if (i > 1) {
      const { data, error } = await supabase.from("grants").insert([grantInfo]);
      if (error) {
        console.log(error);
        console.log(i);
        console.log(grantInfo);
      }
    }
  })
  .on("end", function () {
    //do something with csvData
    console.log(csvData);
  });
