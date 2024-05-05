import { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config()

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = { 
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  }

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      // console.log("-------------\n", data, "-----------------\n",response.data.data)
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error")
    } finally {
      setIsLoading(false)
    }
  }

  // const hardcodedData = [
  //   {
  //     job_id: 'l53FxazMnV5QZ5UrAAAAAA==',
  //     employer_name: 'Upwork',
  //     employer_logo: null,
  //     employer_website: null,
  //     employer_company_type: null,
  //     job_publisher: 'Upwork',
  //     job_employment_type: 'CONTRACTOR',
  //     job_title: 'React Developer',
  //     job_apply_link: 'https://www.upwork.com/freelance-jobs/apply/React-Developer_~0176b95e9000d200a5/',
  //     job_apply_is_direct: true,
  //     job_apply_quality_score: 0.6993,
  //     apply_options: [ [Object] ],
  //     job_description: 'React.js and TypeScript Developer\n' +
  //       '\n' +
  //       'Build a library of composable components in Storybook.js.\n' +
  //       '\n' +
  //       'Animate with react-spring\n' +
  //       '\n' +
  //       'Style with DaisyUI and Tailwind CSS\n' +
  //       '\n' +
  //       'Reference pre-defined JSX code snippets or wireframes to port into Storybook.',
  //     job_is_remote: true,
  //     job_posted_at_timestamp: 1714837451,
  //     job_posted_at_datetime_utc: '2024-05-04T15:44:11.000Z',
  //     job_city: null,
  //     job_state: null,
  //     job_country: 'US',
  //     job_latitude: 37.09024,
  //     job_longitude: -95.71289,
  //     job_benefits: null,
  //     job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=l53FxazMnV5QZ5UrAAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: null,
  //     job_offer_expiration_timestamp: null,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: null,
  //       experience_mentioned: false,
  //       experience_preferred: false
  //     },
  //     job_required_skills: [ 'Wireframing', 'React' ],
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: false,
  //       degree_mentioned: false,
  //       degree_preferred: false,
  //       professional_certification_mentioned: false
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: 40,
  //     job_max_salary: 65,
  //     job_salary_currency: 'USD',
  //     job_salary_period: 'HOUR',
  //     job_highlights: { Qualifications: [Array], Responsibilities: [Array] },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_occupational_categories: null,
  //     job_naics_code: null,
  //     job_naics_name: null
  //   },
  //   {
  //     job_id: 'xPrcw5gF7OwdunbkAAAAAA==',
  //     employer_name: 'SoftHQ Inc',
  //     employer_logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7XK2VKvs2tbpWpHw_7MhJzTPHajTWo56iza-e&s=0',
  //     employer_website: 'http://www.softhq.com',
  //     employer_company_type: null,
  //     job_publisher: 'LinkedIn',
  //     job_employment_type: 'FULLTIME',
  //     job_title: 'Net with React Developer',
  //     job_apply_link: 'https://www.linkedin.com/jobs/view/net-with-react-developer-at-softhq-inc-3914535336',
  //     job_apply_is_direct: false,
  //     job_apply_quality_score: 0.6301,
  //     apply_options: [ [Object], [Object], [Object] ],
  //     job_description: 'Position: Senior .Net with React Developer\n' +
  //       '\n' +
  //       'Location: ONSITE ON DAY 1, Houston, TX Houston located candidates will be submitted first\n' +
  //       '\n' +
  //       'Duration: Long Term\n' +
  //       '\n' +
  //       'Job Description\n' +
  //       '• The client is looking for someone with more than 10 years of hands-on experience as .Net with React Developer\n' +
  //       '• Azure and SQL Experience are also required.\n' +
  //       '• Oil and gas is experience is highly preferred.',
  //     job_is_remote: false,
  //     job_posted_at_timestamp: 1714804542,
  //     job_posted_at_datetime_utc: '2024-05-04T06:35:42.000Z',
  //     job_city: null,
  //     job_state: null,
  //     job_country: 'US',
  //     job_latitude: 37.09024,
  //     job_longitude: -95.71289,
  //     job_benefits: null,
  //     job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=xPrcw5gF7OwdunbkAAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: '2024-06-03T06:33:03.000Z',
  //     job_offer_expiration_timestamp: 1717396383,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: 120,
  //       experience_mentioned: true,
  //       experience_preferred: true
  //     },
  //     job_required_skills: null,
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: true,
  //       degree_mentioned: false,
  //       degree_preferred: false,
  //       professional_certification_mentioned: false
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: null,
  //     job_max_salary: null,
  //     job_salary_currency: null,
  //     job_salary_period: null,
  //     job_highlights: { Qualifications: [Array] },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_occupational_categories: null,
  //     job_naics_code: null,
  //     job_naics_name: null
  //   },
  //   {
  //     job_id: 'oqtOXyf0zMRZJmH3AAAAAA==',
  //     employer_name: 'Mavlra Company',
  //     employer_logo: null,
  //     employer_website: null,
  //     employer_company_type: null,
  //     job_publisher: 'Glassdoor',
  //     job_employment_type: 'CONTRACTOR',
  //     job_title: 'UI React Developer',
  //     job_apply_link: 'https://www.glassdoor.com/job-listing/ui-react-developer-mavlra-company-JV_KO0,18_KE19,33.htm?jl=1009263891007',
  //     job_apply_is_direct: true,
  //     job_apply_quality_score: 0.5582,
  //     apply_options: [ [Object] ],
  //     job_description: 'Job Description\n' +
  //       '\n' +
  //       '8+ years JavaScript, HTML, CSS, and related web technologies\n' +
  //       '7+ years experience with React.js and its core principles\n' +
  //       'Familiarity with state management libraries such as Redux or MobX\n' +
  //       'Experience with modern front-end build pipelines and tools, such as Webpack, Babel, and npm\n' +
  //       'Knowledge of UI/UX design principles and best practices\n' +
  //       'Understanding of RESTful APIs and asynchronous request handling\n' +
  //       'Ability to write unit tests using frameworks such as Jest or Enzyme\n' +
  //       'Excellent problem-solving and communication skills\n' +
  //       'Prior experience working in Agile/Scrum environments (preferred)\n' +
  //       '\n' +
  //       'Location: Bay Area, CA\n' +
  //       '\n' +
  //       'Job Type: W2\n' +
  //       '\n' +
  //       'Qualifications:\n' +
  //       '\n' +
  //       "Bachelor's degree in Computer Science, Engineering, or a related field (preferred)\n" +
  //       '\n' +
  //       'Job Type: Contract\n' +
  //       '\n' +
  //       'Pay: Up to $53.00 per hour\n' +
  //       '\n' +
  //       'Expected hours: 40 – 50 per week\n' +
  //       '\n' +
  //       'Experience level:\n' +
  //       '• 10 years\n' +
  //       '\n' +
  //       'Schedule:\n' +
  //       '• 8 hour shift\n' +
  //       '\n' +
  //       'Work Location: On the road',
  //     job_is_remote: false,
  //     job_posted_at_timestamp: 1714608000,
  //     job_posted_at_datetime_utc: '2024-05-02T00:00:00.000Z',
  //     job_city: null,
  //     job_state: null,
  //     job_country: 'US',
  //     job_latitude: 37.09024,
  //     job_longitude: -95.71289,
  //     job_benefits: null,
  //     job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=oqtOXyf0zMRZJmH3AAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: '2024-09-01T00:00:00.000Z',
  //     job_offer_expiration_timestamp: 1725148800,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: 96,
  //       experience_mentioned: true,
  //       experience_preferred: true
  //     },
  //     job_required_skills: null,
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: false,
  //       degree_mentioned: true,
  //       degree_preferred: true,
  //       professional_certification_mentioned: false
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: 53,
  //     job_max_salary: 53,
  //     job_salary_currency: 'USD',
  //     job_salary_period: 'HOUR',
  //     job_highlights: { Qualifications: [Array], Benefits: [Array] },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_occupational_categories: null,
  //     job_naics_code: null,
  //     job_naics_name: null
  //   },
  //   {
  //     job_id: '316faF9BvvRlf-l-AAAAAA==',
  //     employer_name: 'Upwork',
  //     employer_logo: null,
  //     employer_website: null,
  //     employer_company_type: null,
  //     job_publisher: 'Upwork',
  //     job_employment_type: 'CONTRACTOR',
  //     job_title: 'React Developer - Awesome Dashboard',
  //     job_apply_link: 'https://www.upwork.com/freelance-jobs/apply/React-Developer-Awesome-Dashboard_~018b182d621bf27e74/',
  //     job_apply_is_direct: true,
  //     job_apply_quality_score: 0.6993,
  //     apply_options: [ [Object] ],
  //     job_description: 'We are looking for a skilled React developer who can create an awesome dashboard without design. The ideal candidate will have a strong understanding of React and its ecosystem, as well as experience in building interactive and responsive dashboards.\n' +
  //       '\n' +
  //       'Responsibilities:\n' +
  //       '\n' +
  //       '- Develop a dashboard using React\n' +
  //       '\n' +
  //       '- Implement data visualization and interactivity features\n' +
  //       '\n' +
  //       '- Collaborate with the team to gather requirements and provide technical solutions\n' +
  //       '\n' +
  //       'Required skills:\n' +
  //       '\n' +
  //       '- Proficient in React and its ecosystem\n' +
  //       '\n' +
  //       '- Strong understanding of JavaScript and web development principles\n' +
  //       '\n' +
  //       '- Good problem-solving and communication skills\n' +
  //       '\n' +
  //       'This is a medium-sized project with an estimated duration of 1 to 3 months. We are looking for an intermediate-level React developer who can deliver high-quality code and meet project deadlines. If you are passionate about creating functional and user-friendly dashboards, we would love to hear from you!',
  //     job_is_remote: true,
  //     job_posted_at_timestamp: 1714849274,
  //     job_posted_at_datetime_utc: '2024-05-04T19:01:14.000Z',
  //     job_city: null,
  //     job_state: null,
  //     job_country: 'US',
  //     job_latitude: 37.09024,
  //     job_longitude: -95.71289,
  //     job_benefits: null,
  //     job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=316faF9BvvRlf-l-AAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: null,
  //     job_offer_expiration_timestamp: null,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: null,
  //       experience_mentioned: true,
  //       experience_preferred: false
  //     },
  //     job_required_skills: [ 'Material UI', 'React', 'JavaScript', 'CSS', 'HTML', 'HTML5' ],
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: false,
  //       degree_mentioned: false,
  //       degree_preferred: false,
  //       professional_certification_mentioned: false
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: null,
  //     job_max_salary: null,
  //     job_salary_currency: null,
  //     job_salary_period: null,
  //     job_highlights: { Qualifications: [Array], Responsibilities: [Array] },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_occupational_categories: null,
  //     job_naics_code: null,
  //     job_naics_name: null
  //   },
  //   {
  //     job_id: '3kO2HxlGi7yxaK4hAAAAAA==',
  //     employer_name: 'Diverse Lynx',
  //     employer_logo: 'https://prod-file-upload-store.s3.amazonaws.com/0XyiwpDMSTG5Piomqn0K_6460b6f687080e26f1c0ba43f0fbc060.jpg',
  //     employer_website: 'http://www.diverselynx.com',
  //     employer_company_type: null,
  //     job_publisher: 'LinkedIn',
  //     job_employment_type: 'FULLTIME',
  //     job_title: 'React Developer',
  //     job_apply_link: 'https://www.linkedin.com/jobs/view/react-developer-at-diverse-lynx-3820184622',
  //     job_apply_is_direct: false,
  //     job_apply_quality_score: 0.716,
  //     apply_options: [ [Object] ],
  //     job_description: "Bachelor's degree in Computer Science or a related field.\n" +
  //       '\n' +
  //       'Proven experience in React development with a strong portfolio of completed projects.\n' +
  //       '\n' +
  //       'Familiarity with modern front-end libraries, frameworks, and tools, including JavaScript, ES6, HTML, CSS, Git, etc.\n' +
  //       '\n' +
  //       'Excellent understanding of React fundamentals such as hooks, lifecycle methods, etc.\n' +
  //       '\n' +
  //       'Cross-training experience on other skills like NodeJS, GraphQL, AWS or others.\n' +
  //       '\n' +
  //       'Understanding of RESTful APIs.\n' +
  //       '\n' +
  //       'Experience with agile/scrum development methodologies.\n' +
  //       '\n' +
  //       'Familiarity with unit testing libraries such as Jest.\n' +
  //       '\n' +
  //       'Strong communication skills, both verbal and written.\n' +
  //       '\n' +
  //       'Diverse Lynx LLC is an Equal Employment Opportunity employer. All qualified applicants will receive due consideration for employment without any discrimination. All applicants will be evaluated solely on the basis of their ability, competence and their proven capability to perform the functions outlined in the corresponding role. We promote and support a diverse workforce across all levels in the company.',
  //     job_is_remote: false,
  //     job_posted_at_timestamp: 1706852864,
  //     job_posted_at_datetime_utc: '2024-02-02T05:47:44.000Z',
  //     job_city: 'Marquette',
  //     job_state: 'KS',
  //     job_country: 'US',
  //     job_latitude: 38.555565,
  //     job_longitude: -97.83366,
  //     job_benefits: null,
  //     job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=3kO2HxlGi7yxaK4hAAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: '2024-05-26T17:58:16.000Z',
  //     job_offer_expiration_timestamp: 1716746296,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: null,
  //       experience_mentioned: true,
  //       experience_preferred: false
  //     },
  //     job_required_skills: null,
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: true,
  //       degree_mentioned: true,
  //       degree_preferred: true,
  //       professional_certification_mentioned: false
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: null,
  //     job_max_salary: null,
  //     job_salary_currency: null,
  //     job_salary_period: null,
  //     job_highlights: { Qualifications: [Array] },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_occupational_categories: null,
  //     job_naics_code: null,
  //     job_naics_name: null
  //   },
  //   {
  //     job_id: 'nwdKwU-gw2LtG-WsAAAAAA==',
  //     employer_name: 'Everlight Solar',
  //     employer_logo: null,
  //     employer_website: null,
  //     employer_company_type: null,
  //     job_publisher: 'Monster',
  //     job_employment_type: 'FULLTIME',
  //     job_title: 'React Developer (REMOTE)',
  //     job_apply_link: 'https://www.monster.com/job-openings/react-developer-remote-oklahoma-city-ok--48098524-802b-4cf4-9778-79bfef9165c0',
  //     job_apply_is_direct: false,
  //     job_apply_quality_score: 0.5622,
  //     apply_options: [
  //       [Object], [Object],
  //       [Object], [Object],
  //       [Object], [Object],
  //       [Object]
  //     ],
  //     job_description: 'Everlight Solar is seeking a skilled React Developer who will will help to produce scalable software solutions. As a React Developer, you play a key role in deployment and support of cutting-edge applications. This will be a full-time, work-from-home "remote" position.\n' +
  //       '\n' +
  //       'Must own a Mac computer and be fluent with the Apple ecosystem of software (iOS, macOS, iWork, etc.)\n' +
  //       '\n' +
  //       'Everlight Solar is a rapidly growing company and the leader of solar energy in the Midwest. We offer a unique experience that fosters individual growth and rewards performance. Our culture at Everlight is extremely important to us. The work environment is fast-paced and dynamic. We value teamwork, quality, innovation, and customer success. Our ideal candidate is self-motivated, detail-oriented, has excellent problem-solving abilities, is passionate about delivering results on-time, exceeding expectations, and ensuring success for our teams.\n' +
  //       '\n' +
  //       'Responsibilities:\n' +
  //       '• Create new React applications\n' +
  //       '• Participate in the design and creation of scalable software\n' +
  //       '• Support live applications with updates and new features\n' +
  //       '• Proactively seeks and fixes defects\n' +
  //       '• Contributes to design, code and project documents reviews\n' +
  //       '• Communicate with clients and team members about best practices for building efficient, extensible, standards-based applications and apps\n' +
  //       '\n' +
  //       'Requirements:\n' +
  //       '• Minimum 2+ years of experience building scalable web applications\n' +
  //       '• Minimum 2+ years of professional experience with React.JS and its core principles\n' +
  //       '• Minimum 2+ years of direct frontend experience\n' +
  //       '• Hands on experience with popular React.Js workflows\n' +
  //       '• Hands-on experience working with SQL databases\n' +
  //       '• Experience with data modeling\n' +
  //       '• Proven troubleshooting and debugging skills\n' +
  //       '• A documented history of successfully driving projects to completion\n' +
  //       '• A demonstrated ability to understand and articulate complex requirements\n' +
  //       '• Excellent project management skills and a positive attitude\n' +
  //       '• Must demonstrate exceptional verbal and written communication skills\n' +
  //       '• Must demonstrate ability to communicate effectively at all levels of the organization\n' +
  //       '\n' +
  //       'Benefits:\n' +
  //       '• Health Insurance\n' +
  //       '• Dental Insurance\n' +
  //       '• Vision Insurance\n' +
  //       '• Life Insurance\n' +
  //       '• PTO\n' +
  //       '• Sick and Safe Time\n' +
  //       '• Paid Holidays Off\n' +
  //       '\n' +
  //       'Salary: $70,000-$100,000/ year\n' +
  //       '\n' +
  //       'Everlight Solar is proudly an Equal Opportunity Employer. We value diversity of all types and are excited to work with talented individuals from a wide range of backgrounds. Everlight is committed to inclusion and we invite people of any race, creed, color, national origin, ancestry, marital status, sexual orientation, gender identity or expression, disability, nationality or sex, age groups (18+), and levels of education to apply. Authorized to work in the US and background check required.\n' +
  //       '\n' +
  //       'About the Company:\n' +
  //       'Everlight Solar',
  //     job_is_remote: false,
  //     job_posted_at_timestamp: 1714435200,
  //     job_posted_at_datetime_utc: '2024-04-30T00:00:00.000Z',
  //     job_city: 'Oklahoma City',
  //     job_state: 'OK',
  //     job_country: 'US',
  //     job_latitude: 35.46756,
  //     job_longitude: -97.516426,
  //     job_benefits: [ 'paid_time_off', 'health_insurance', 'dental_coverage' ],
  //     job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=nwdKwU-gw2LtG-WsAAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: null,
  //     job_offer_expiration_timestamp: null,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: 24,
  //       experience_mentioned: true,
  //       experience_preferred: false
  //     },
  //     job_required_skills: null,
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: false,
  //       degree_mentioned: false,
  //       degree_preferred: false,
  //       professional_certification_mentioned: false
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: 70000,
  //     job_max_salary: 100000,
  //     job_salary_currency: 'USD',
  //     job_salary_period: 'YEAR',
  //     job_highlights: {
  //       Qualifications: [Array],
  //       Responsibilities: [Array],
  //       Benefits: [Array]
  //     },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_occupational_categories: null,
  //     job_naics_code: null,
  //     job_naics_name: null
  //   },
  //   {
  //     job_id: 'B26onwF1dwIlHMUKAAAAAA==',
  //     employer_name: 'TekSynap',
  //     employer_logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAj2ZShMP_A6cHkFXCWsfNKN-wC147jmOxCvm&s=0',
  //     employer_website: 'http://www.teksynap.com',
  //     employer_company_type: null,
  //     job_publisher: 'Glassdoor',
  //     job_employment_type: 'FULLTIME',
  //     job_title: 'React Developer',
  //     job_apply_link: 'https://www.glassdoor.com/job-listing/react-developer-teksynap-JV_KO0,15_KE16,24.htm?jl=1009194086082',
  //     job_apply_is_direct: false,
  //     job_apply_quality_score: 0.5587,
  //     apply_options: [ [Object] ],
  //     job_description: 'Responsibilities & Qualifications:\n' +
  //       '\n' +
  //       'RESPONSIBILITIES\n' +
  //       '\n' +
  //       'We are looking for a skilled React Developer who will be responsible for developing and implementing user interface components using React.js concepts and workflows. The ideal candidate should have a strong understanding of React fundamentals, including JSX, Virtual DOM, and component lifecycle.\n' +
  //       '\n' +
  //       'REQUIRED QUALIFICATIONS\n' +
  //       '• Proficiency in JavaScript, including DOM manipulation and the JavaScript object model\n' +
  //       '• Thorough understanding of React.js and its core principles\n' +
  //       '• Experience with popular React.js workflows (such as Redux, Flux, or Context API)\n' +
  //       '• Familiarity with RESTful APIs and modern authorization mechanisms (such as JSON Web Token)\n' +
  //       '• Knowledge of modern authorization mechanisms, such as JSON Web Token\n' +
  //       '• Experience with common front-end development tools such as Babel, Webpack, NPM, etc.\n' +
  //       '• Familiarity with code versioning tools such as Git\n' +
  //       '• Excellent problem-solving skills and attention to detail\n' +
  //       '• Strong communication and teamwork skills\n' +
  //       '\n' +
  //       'Overview:\n' +
  //       '\n' +
  //       'TekSynap’s customer is the Nation’s risk advisor, working with partners to defend against today’s threats and collaborating to build a more secure and resilient infrastructure for the future. Building the Nation’s capacity to defend against cyber-attacks, working to provide cybersecurity tools, incident response capabilities, and assessment services, to safeguard systems that support national critical functions.\n' +
  //       '\n' +
  //       'TekSynap is a fast growing high-tech company that understands both the pace of technology today and the need to have a comprehensive well planned information management environment. “Technology moving at the speed of thought” embodies these principles – the need to nimbly utilize the best that information technology offers to meet the business needs of our Federal Government customers.\n' +
  //       '\n' +
  //       'We offer our full-time employees a competitive benefits package to include health, dental, vision, 401K, life insurance, short-term and long-term disability plans, vacation time and holidays.\n' +
  //       '\n' +
  //       'Visit us at www.TekSynap.com.\n' +
  //       '\n' +
  //       'Apply now to explore jobs with us!\n' +
  //       '\n' +
  //       'The safety and health of our employees is of the utmost importance. Employees are required to comply with any vaccination requirements mandated by contract, applicable law or regulation.\n' +
  //       '\n' +
  //       'By applying to a role at TekSynap you are providing consent to receive text messages regarding your interview and employment status. If at any time you would like to opt out of text messaging, respond "STOP".\n' +
  //       '\n' +
  //       'Additional Job Information:\n' +
  //       '\n' +
  //       'WORK ENVIRONMENT AND PHYSICAL DEMANDS\n' +
  //       '\n' +
  //       'The work environment characteristics described here are representative of those an employee encounters while performing the essential functions of the job. Reasonable accommodation may be made to enable individuals with disabilities to perform the essential functions.\n' +
  //       '• Location: National Capitol Region\n' +
  //       '• Type of environment: Hybrid\n' +
  //       '• Noise level: Medium\n' +
  //       '• Work schedule: Schedule is day shift Monday – Friday. May be requested to work evenings and weekends to meet program and contract needs.\n' +
  //       '• Amount of Travel: TBD\n' +
  //       '\n' +
  //       'PHYSICAL DEMANDS\n' +
  //       '\n' +
  //       'The physical demands described here are representative of those that must be met by an employee to successfully perform the essential functions of this job. Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.\n' +
  //       '\n' +
  //       'While performing the duties of this job, the employee is regularly required to use hands to handle, feel, touch; reach with hands and arms; talk and hear. The employee is regularly required to stand; walk; sit; climb or balance; and stoop, kneel, crouch, or crawl. The employee is regularly required to lift up to 10 pounds. The employee is frequently required to lift up to 25 pounds; and up to 50 pounds. The vision requirements include close vision, distance vision, peripheral vision, depth perception, and ability to adjust focus.\n' +
  //       '\n' +
  //       'WORK AUTHORIZATION/SECURITY CLEARANCE\n' +
  //       '\n' +
  //       'U.S. Citizenship\n' +
  //       '\n' +
  //       'Secret Clearance requirement\n' +
  //       '\n' +
  //       'OTHER DUTIES\n' +
  //       '\n' +
  //       'Please note this job description is not designed to cover or contain a comprehensive listing of activities, duties or responsibilities that are required of the employee for this job. Duties, responsibilities and activities may change at any time with or without notice.\n' +
  //       '\n' +
  //       'EQUAL EMPLOYMENT OPPORTUNITY\n' +
  //       '\n' +
  //       'In order to provide equal employment and advancement opportunities to all individuals, employment decisions will be based on merit, qualifications, and abilities. TekSynap does not discriminate against any person because of race, color, creed, religion, sex, sexual orientation, gender identity, protected veteran status, national origin, disability, age, genetic information or any other characteristic protected by law (referred to as “protected status”). This nondiscrimination policy extends to all terms, conditions, and privileges of employment as well as the use of all company facilities, participation in all company-sponsored activities, and all employment actions such as promotions, compensation, benefits, and termination of employment.\n' +
  //       '\n' +
  //       'TekSynap is committed to ensuring that our online application process provides an equal employment opportunity to all job seekers, including individuals with disabilities. If you believe you need a reasonable accommodation in order to search for a job opening or to submit an application, please contact hr@teksynap.com for assistance.',
  //     job_is_remote: false,
  //     job_posted_at_timestamp: 1713484800,
  //     job_posted_at_datetime_utc: '2024-04-19T00:00:00.000Z',
  //     job_city: null,
  //     job_state: null,
  //     job_country: 'US',
  //     job_latitude: 37.09024,
  //     job_longitude: -95.71289,
  //     job_benefits: [
  //       'dental_coverage',
  //       'retirement_savings',
  //       'paid_time_off',
  //       'health_insurance'
  //     ],
  //     job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=B26onwF1dwIlHMUKAAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: '2024-08-27T00:00:00.000Z',
  //     job_offer_expiration_timestamp: 1724716800,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: null,
  //       experience_mentioned: true,
  //       experience_preferred: false
  //     },
  //     job_required_skills: null,
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: false,
  //       degree_mentioned: false,
  //       degree_preferred: false,
  //       professional_certification_mentioned: false
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: null,
  //     job_max_salary: null,
  //     job_salary_currency: null,
  //     job_salary_period: null,
  //     job_highlights: {
  //       Qualifications: [Array],
  //       Responsibilities: [Array],
  //       Benefits: [Array]
  //     },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_occupational_categories: null,
  //     job_naics_code: null,
  //     job_naics_name: null
  //   },
  //   {
  //     job_id: 'SRJC2Yw8g2d0zBxOAAAAAA==',
  //     employer_name: 'BlackBear',
  //     employer_logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYyOTCXajD4DSmqrciVuIBb46GP8f9fJwovji&s=0',
  //     employer_website: 'http://blackbear.global/en',
  //     employer_company_type: null,
  //     job_publisher: 'Startup Jobs',
  //     job_employment_type: 'FULLTIME',
  //     job_title: 'React Developer',
  //     job_apply_link: 'https://startup.jobs/react-developer-blackbear-2-4846027',
  //     job_apply_is_direct: false,
  //     job_apply_quality_score: 0.6192,
  //     apply_options: [ [Object], [Object] ],
  //     job_description: '*** PLEASE NOTE: THIS IS NOT A REAL JOBJob DescriptionWe are looking for a great JavaScript developer who is proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important.\n' +
  //       '\n' +
  //       'Responsibilities• Developing new user-facing features using React.js\n' +
  //       '• Building reusable components and front-end libraries for future use\n' +
  //       '• Translating designs and wireframes into high quality code\n' +
  //       '• Optimizing components for maximum performance across a vast array of web-capable devices and browsers\n' +
  //       '• {{Add other relevant responsibilities here}}\n' +
  //       '\n' +
  //       'Skills• Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model\n' +
  //       '• Thorough understanding of React.js and its core principles\n' +
  //       '• Experience with popular React.js workflows (such as Flux or Redux)\n' +
  //       '• Familiarity with newer specifications of EcmaScript\n' +
  //       '• Experience with data structure libraries (e.g., Immutable.js)\n' +
  //       '• Knowledge of isomorphic React is a plus\n' +
  //       '• Familiarity with RESTful APIs\n' +
  //       '• Knowledge of modern authorization mechanisms, such as JSON Web Token\n' +
  //       '• Familiarity with modern front-end build pipelines and tools\n' +
  //       '• Experience with common front-end development tools such as Babel, Webpack, NPM, etc.\n' +
  //       '• Ability to understand business requirements and translate them into technical requirements\n' +
  //       '• A knack for benchmarking and optimization',
  //     job_is_remote: false,
  //     job_posted_at_timestamp: 1699509816,
  //     job_posted_at_datetime_utc: '2023-11-09T06:03:36.000Z',
  //     job_city: null,
  //     job_state: null,
  //     job_country: 'US',
  //     job_latitude: 37.09024,
  //     job_longitude: -95.71289,
  //     job_benefits: null,
  //     job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=SRJC2Yw8g2d0zBxOAAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: null,
  //     job_offer_expiration_timestamp: null,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: null,
  //       experience_mentioned: true,
  //       experience_preferred: false
  //     },
  //     job_required_skills: null,
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: false,
  //       degree_mentioned: false,
  //       degree_preferred: false,
  //       professional_certification_mentioned: false
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: null,
  //     job_max_salary: null,
  //     job_salary_currency: null,
  //     job_salary_period: null,
  //     job_highlights: { Qualifications: [Array], Responsibilities: [Array] },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_occupational_categories: [ '15-1132.00 Software Developers, Application' ],
  //     job_naics_code: null,
  //     job_naics_name: null
  //   },
  //   {
  //     job_id: '-HDW9rft9sem5QOGAAAAAA==',
  //     employer_name: 'NTT Data',
  //     employer_logo: 'https://www.nttdata.com/jp/ja/-/media/nttdatajapan/images/info/exclusion/logo.gif',
  //     employer_website: 'http://www.nttdata.com',
  //     employer_company_type: 'Computer Services',
  //     job_publisher: 'Jooble',
  //     job_employment_type: 'FULLTIME',
  //     job_title: 'React JS Developer',
  //     job_apply_link: 'https://jooble.org/jdp/3892149906811611837',
  //     job_apply_is_direct: false,
  //     job_apply_quality_score: 0.5342,
  //     apply_options: [ [Object] ],
  //     job_description: 'Req ID: 272346\n' +
  //       '\n' +
  //       'NTT DATA Services strives to hire exceptional, innovative and passionate individuals who want to grow with us. If you want to be part of an inclusive, adaptable, and forward-thinking organization, apply now.\n' +
  //       '\n' +
  //       'We are currently seeking a React JS Developer to join our team in Bangalore, Karnātaka (IN-KA), India (IN).\n' +
  //       '\n' +
  //       'About the Role\n' +
  //       '\n' +
  //       'Senior UI Developer with excellent design, hands on development & technical skills along with good interpersonal skills, capable of leading and working in highly critical transformation projects.\n' +
  //       '\n' +
  //       'Responsibilities\n' +
  //       '• Develop reusable UI components, define accessibility & governance and rollout the components across the digital channel group\n' +
  //       '• Participate effectively in the entire software development life cycle\n' +
  //       '• Acclimate to new technologies and situations with the vision of providing best customer experience\n' +
  //       '• Develop applications with good usability principles, cross-browser compatibility, web security (XSRF, cross-site scripting defense), accessibility, Markup standards, Last mile performance (minify, closure tools, sprites) and HTML document architecture.\n' +
  //       '• Collaborate with Product Managers, System Architects, & Analysts as needed\n' +
  //       '• Lead and motivate development team members to meet expected deliverables and quality standards across multiple releases\n' +
  //       '• Collaborate with team to design, develop, test and refine deliverables that meet the objectives\n' +
  //       '• Directs and assists developers and perform code reviews and implement improvement plans\n' +
  //       '• Conduct brainstorming sessions and motivate team and drive innovations\n' +
  //       '\n' +
  //       'Mandatory Skills\n' +
  //       '• Core skills - 5 to 10 years UI Development experience with expertise in MERN(MongoDB, Express Server, React, Node) stack and hands on in JQuery, JavaScript, HTML and CSS.\n' +
  //       '• Experience with Enterprise Mobility Applications Performance Tuning, Scaling and Security Best Practices\n' +
  //       '• Hands on experience with Unit Testing (JUnit preferred)/ TDD - Scripting & Automated Testing, Mutation Testing (e.g. PITEST), Continuous Integration & Deployment (CI/CD) and Behavior Driven Development (BDD)\n' +
  //       '• Hands on experience developing Accessibility compliance applications\n' +
  //       '• Hands on experience in packaging and deploying UI deliverables\n' +
  //       '• Strong in OOAD, Multi-threaded application development, design and implementation of web applications, Design Patterns.\n' +
  //       '• Experience in Digital Banking/ecommerce or any complex customer facing applications\n' +
  //       '• API - driven development - Experience working with remote data via SOAP, REST and JSON.\n' +
  //       '\n' +
  //       'About NTT DATA Services\n' +
  //       '\n' +
  //       'NTT DATA Services is a recognized leader in IT and business services, including cloud, data and applications, headquartered in Texas. As part of NTT DATA, a $30 billion trusted global innovator with a combined global reach of over 80 countries, we help clients transform through business and technology consulting, industry and digital solutions, applications development and management, managed edge-to-cloud infrastructure services, BPO, systems integration and global data centers. We are committed to our clients’ long-term success. Visit nttdata.com or LinkedIn to learn more.\n' +
  //       '\n' +
  //       'NTT DATA Services is an equal opportunity employer and considers all applicants without regarding to race, color, religion, citizenship, national origin, ancestry, age, sex, sexual orientation, gender identity, genetic information, physical or mental disability, veteran or marital status, or any other characteristic protected by law. We are committed to creating a diverse and inclusive environment for all employees. If you need assistance or an accommodation due to a disability, please inform your recruiter so that we may connect you with the appropriate team.',
  //     job_is_remote: false,
  //     job_posted_at_timestamp: 1714730160,
  //     job_posted_at_datetime_utc: '2024-05-03T09:56:00.000Z',
  //     job_city: null,
  //     job_state: null,
  //     job_country: 'US',
  //     job_latitude: 37.09024,
  //     job_longitude: -95.71289,
  //     job_benefits: null,
  //     job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=-HDW9rft9sem5QOGAAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: '2024-06-03T09:01:20.000Z',
  //     job_offer_expiration_timestamp: 1717405280,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: 60,
  //       experience_mentioned: true,
  //       experience_preferred: true
  //     },
  //     job_required_skills: null,
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: false,
  //       degree_mentioned: false,
  //       degree_preferred: false,
  //       professional_certification_mentioned: false
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: null,
  //     job_max_salary: null,
  //     job_salary_currency: null,
  //     job_salary_period: null,
  //     job_highlights: { Qualifications: [Array], Responsibilities: [Array] },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_occupational_categories: null,
  //     job_naics_code: '541512',
  //     job_naics_name: 'Computer Systems Design Services'
  //   },
  //   {
  //     job_id: 'F6Rjlo3OycIds8D4AAAAAA==',
  //     employer_name: 'Global Soft Systems, Inc',
  //     employer_logo: null,
  //     employer_website: 'http://globalsoftsystems.com',
  //     employer_company_type: null,
  //     job_publisher: 'ZipRecruiter',
  //     job_employment_type: 'CONTRACTOR',
  //     job_title: 'React Developer',
  //     job_apply_link: 'https://www.ziprecruiter.com/c/Global-Soft-Systems,-Inc/Job/React-Developer/-in-Bentonville,AR?jid=c093dbcc41ade569',
  //     job_apply_is_direct: false,
  //     job_apply_quality_score: 0.6636,
  //     apply_options: [ [Object] ],
  //     job_description: 'Role: React Developer x2\n' +
  //       '\n' +
  //       'Location: Bentonville, AR preferred (Remote start available)\n' +
  //       '\n' +
  //       'Duration: 6+ Contract extension likely past 6 months\n' +
  //       '\n' +
  //       'Desirable skills:\n' +
  //       '• Experience working on large-scale JavaScript codebases with contributors that span teams, offices and time zones\n' +
  //       '• Experience with testing utilities such as Jest or Enzyme\n' +
  //       '• Experience with implementations with GCP and Kubernetes\n' +
  //       '• Some experience in Big Data platforms including Hadoop, Hive, Spark, Teradata, and in-memory and GPU-based databases. (Data Lake using Hadoop currently, Azure/PCF)\n' +
  //       '• Practical working experience with continuous integration and continuous delivery (CI/CD)\n' +
  //       '\n' +
  //       'Essential skills:\n' +
  //       '• 3+ Years of software development experience, preferably on large-scale initiatives\n' +
  //       '• Proficiency in HTML and CSS and familiarity with front end browsers\n' +
  //       '• 3+ Years of experience designing technical solutions using Nodejs\n' +
  //       '• 3+ Years of experience designing technical solutions using Angular/React (React is more desirable than Angular)\n' +
  //       '• 3+ Years of experience Interacting with databases through queries and APIs/Services\n' +
  //       '• 2+ Years of experience developing software in Java.\n' +
  //       '\n' +
  //       'Minimum Qualifications:\n' +
  //       "• Bachelor's degree in Computer Science and 2 years experience in software engineering or related field OR 4 years experience in software engineering or related field.\n" +
  //       "• Master's degree in Computer Science or related field",
  //     job_is_remote: true,
  //     job_posted_at_timestamp: 1634841933,
  //     job_posted_at_datetime_utc: '2021-10-21T18:45:33.000Z',
  //     job_city: 'Bentonville',
  //     job_state: 'AR',
  //     job_country: 'US',
  //     job_latitude: 36.372356,
  //     job_longitude: -94.21021,
  //     job_benefits: null,
  //     job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=F6Rjlo3OycIds8D4AAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: '2024-06-03T00:00:00.000Z',
  //     job_offer_expiration_timestamp: 1717372800,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: 36,
  //       experience_mentioned: true,
  //       experience_preferred: false
  //     },
  //     job_required_skills: null,
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: false,
  //       degree_mentioned: true,
  //       degree_preferred: true,
  //       professional_certification_mentioned: false
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: null,
  //     job_max_salary: null,
  //     job_salary_currency: null,
  //     job_salary_period: null,
  //     job_highlights: { Qualifications: [Array] },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_occupational_categories: [ '15-1132.00: Software Developers, Applications' ],
  //     job_naics_code: null,
  //     job_naics_name: null
  //   }
  // ]

  // // Fetch data function
  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     // Simulate fetching data
  //     setTimeout(() => {
  //       setData(hardcodedData);
  //       setIsLoading(false);
  //       setError(null);
  //     }, 1000); // Simulating loading time with a setTimeout
  //   } catch (error) {
  //     setError(error);
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch };
};

export default useFetch;