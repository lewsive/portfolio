import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    title: 'Project Mercury',
    description:
      'A web and mobile paperwork system for Army Reserve operations, built on a 17-person team for my UCF senior design project.',
    tech: ['React', 'React Native', 'TypeScript', 'AWS'],
  },
  {
    title: 'LLM Synth Preset Classifier',
    description:
      'Reads Vital synthesizer presets and sorts them by sound using a large language model, including fully offline inference.',
    tech: ['Python', 'FastAPI', 'React', 'MongoDB'],
  },
  {
    title: 'DJ Business Manager',
    description:
      'A full-stack app for bookings, scheduling, and client messages, with a REST API secured by JWT authentication.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
];