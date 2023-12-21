'use client';
import { CreateTopic } from '@/actions';
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from '@nextui-org/react';
import { useFormState } from 'react-dom';
import FormButton from '../common/form-button';

export default function TopicCrateForm() {
  const [formState, action] = useFormState(CreateTopic, {
    errors: {},
  });
  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color='primary'>Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg'>Create a Topic</h3>
            <Input
              name='name'
              label='Name'
              labelPlacement='outside'
              placeholder='Name'
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />
            {/* <div className='bg-red-400'>
                {formState.errors.name?.join(', ')}
            </div> */}
            <Textarea
              name='description'
              label='Description'
              labelPlacement='outside'
              placeholder='Description your topic'
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />
            {formState.errors._form ? (
              <div className='bg-red-700 rounded p-4'>
                <h2 className='text-orange-200'>
                  {formState.errors._form?.join(', ')}
                </h2>
              </div>
            ) : null}

            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
