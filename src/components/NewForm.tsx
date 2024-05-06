import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData } from "../App";
type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};
const NewForm = ({ onSubmit }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      body: bodyRef.current!.value,
      tags: [],
    });
  };
  return (
    <form className="grid gap-6 grid-cols-2" onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="title">Title</InputLabel>
        <Input id="title" ref={titleRef} />
      </FormControl>
      <FormControl>
        <CreatableReactSelect isMulti />
      </FormControl>
      <FormControl className="col-span-2">
        <TextField
          id="textarea"
          placeholder="Body"
          multiline
          rows={10}
          maxRows={10}
          ref={bodyRef}
        />
      </FormControl>
      <div className="col-start-2 justify-self-end space-x-4">
        <Button type="submit" variant="contained" className="">
          Save
        </Button>
        <Link to="..">
          <Button type="button" variant="outlined" className="">
            Cancel
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default NewForm;
