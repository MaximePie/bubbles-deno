import {useState} from 'react'
import axios from 'axios'
import './App.css'

/**
 * A random bubble to be added to a project
 */
type DraftBubble = {
  name: string;
}

type DraftProject = {
  name: string;
  bubbles: DraftBubble[];
}
export function ProjectForm() {
  const [draftProject, setDraftProject] = useState<DraftProject>({
    name: '',
    bubbles: [],
  });
  const [draftBubble, setDraftBubble] = useState<DraftBubble>({
    name: '',
  });
  return (
    <div>
      <h1>Project Form</h1>
      <h4>Name</h4>
      <input
        type="text"
        value={draftProject.name}
onChange={(e) => setDraftProject({ ...draftProject, name: e.target.value })}
      />
      <h4>Bubbles</h4>
      <input type="text" value={draftBubble.name} onChange={(e) => setDraftBubble({ ...draftBubble, name: e.target.value })}/>
      <button onClick={addBubble}>
        Add Bubble
      </button>
      <button
        onClick={saveProject}
      >
        Save
      </button>
      <ul>
        {draftProject.bubbles.map((bubble) => (
          <li key={bubble.name}>{bubble.name}</li>
        ))}
      </ul>
    </div>
  )

  function addBubble() {
    setDraftProject({
      ...draftProject,
      bubbles: [...draftProject.bubbles, draftBubble],
    })
    setDraftBubble({ name: '' })
  }

  /**
   * Send data to server and save project
   */
  function saveProject() {
    axios.post('http://localhost:3001/projects', draftProject)
  }
}

function App() {
  return (
    <>
      <ProjectForm/>
    </>
  )
}

export default App
