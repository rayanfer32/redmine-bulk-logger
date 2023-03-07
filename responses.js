const FETCH_AUTOCOMPLETE = [{"id":168420,"label":"Task #168420: 3 in 1- Adding New fields to P7E mode as per API doc","value":168420},{"id":168414,"label":"Task #168414: 3 in 1 : Primary flow development","value":168414},{"id":168063,"label":"Task #168063: UAT Deployment - 3 in 1 - Aadhar Masking","value":168063},{"id":168050,"label":"Task #168050: 3 in 1 | Aadhaar masking - Negative scenarios","value":168050},{"id":168048,"label":"Bug #168048: 3 in 1 | Field Missing ","value":168048},{"id":167962,"label":"Task #167962: 3 in 1: Dedupe validations Integraton","value":167962},{"id":167385,"label":"Task #167385: 3 in 1: API Integration Testing","value":167385},{"id":166160,"label":"Task #166160: 3 in 1 Code cleanup","value":166160},{"id":165694,"label":"Task #165694: 3 in 1: UAT Testing ","value":165694},{"id":165692,"label":"Client Issue #165692: 3 in 1: UAT Support- Update New Indian Address must be mandatory","value":165692}]

const ACTIVITIES = {
  time_entry_activities: [
    {
      id: 8,
      name: 'UI/UX Design',
      is_default: false,
      active: true,
    },
    {
      id: 9,
      name: 'Backend Development',
      is_default: false,
      active: true,
    },
    {
      id: 10,
      name: 'QA Testing',
      is_default: false,
      active: true,
    },
    {
      id: 11,
      name: 'Requirement Gathering',
      is_default: false,
      active: true,
    },
    {
      id: 12,
      name: 'Deployment',
      is_default: false,
      active: true,
    },
    {
      id: 13,
      name: 'UI Development',
      is_default: false,
      active: true,
    },
    {
      id: 14,
      name: 'UI Development Rework',
      is_default: false,
      active: true,
    },
    {
      id: 15,
      name: 'Backend Development Rework',
      is_default: false,
      active: true,
    },
    {
      id: 16,
      name: 'Support Development',
      is_default: false,
      active: true,
    },
    {
      id: 17,
      name: 'Support Query Writing',
      is_default: false,
      active: true,
    },
    {
      id: 18,
      name: 'Support for Production',
      is_default: false,
      active: true,
    },
    {
      id: 19,
      name: 'KT Session',
      is_default: false,
      active: true,
    },
    {
      id: 20,
      name: 'Documentation',
      is_default: false,
      active: true,
    },
    {
      id: 21,
      name: 'Architecting Solution',
      is_default: false,
      active: true,
    },
    {
      id: 22,
      name: 'Architecture Review',
      is_default: false,
      active: true,
    },
    {
      id: 23,
      name: 'Project Planning',
      is_default: false,
      active: true,
    },
    {
      id: 24,
      name: 'Status Reporting',
      is_default: false,
      active: true,
    },
    {
      id: 25,
      name: 'Tech Design',
      is_default: false,
      active: true,
    },
    {
      id: 26,
      name: 'DevOps Activities',
      is_default: false,
      active: true,
    },
    {
      id: 27,
      name: 'Bug Fixing',
      is_default: false,
      active: true,
    },
    {
      id: 28,
      name: 'Code Review',
      is_default: false,
      active: true,
    },
    {
      id: 29,
      name: 'Unit Testing',
      is_default: false,
      active: true,
    },
    {
      id: 30,
      name: 'QA Automation',
      is_default: false,
      active: true,
    },
    {
      id: 31,
      name: 'Test Case Creation',
      is_default: false,
      active: true,
    },
    {
      id: 32,
      name: 'Project Meeting',
      is_default: false,
      active: true,
    },
    {
      id: 33,
      name: 'Client Call',
      is_default: false,
      active: true,
    },
    {
      id: 34,
      name: 'Internal Demo',
      is_default: false,
      active: true,
    },
    {
      id: 35,
      name: 'Org-wide Meeting / Activity',
      is_default: false,
      active: true,
    },
    {
      id: 36,
      name: 'Tech Sessions / Trainings',
      is_default: false,
      active: true,
    },
    {
      id: 37,
      name: 'DevOps Automation',
      is_default: false,
      active: true,
    },
    {
      id: 38,
      name: 'Idle Time',
      is_default: false,
      active: true,
    },
  ],
};



const savedTasks = [
  {
    issue_id: '163781',
    activity_id: '9',
    spent_on: '2022-12-21',
    hours: '2',
    comments: '3 in 1: Nodejs Mock backend',
  },
  {
    issue_id: '91316',
    activity_id: '12',
    spent_on: '2022-12-21',
    hours: '0.5',
    comments: 'Git activities merge staging',
  },
  {
    issue_id: '89749',
    activity_id: '24',
    spent_on: '2022-12-21',
    hours: '1',
    comments: 'Scrum Call',
  },
  {
    issue_id: '84623',
    activity_id: '33',
    spent_on: '2022-12-21',
    hours: '1',
    comments: '3 in 1: Client Call',
  },
  {
    issue_id: '149285',
    activity_id: '25',
    spent_on: '2022-12-21',
    hours: '1',
    comments: '3 in 1: Internal Team discussion',
  },
];
// localStorage.savedTasks = JSON.stringify(savedTasks);
