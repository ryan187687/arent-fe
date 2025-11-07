'use client';
import type { FieldValues, UseFormProps } from 'react-hook-form';
import { useForm } from 'react-hook-form';

const useHookForm = <T extends FieldValues>(props?: UseFormProps<T>) => {
  const { formState, watch, ...otherValues } = useForm<T>({
    mode: 'onTouched',
    ...(props || {}),
  });

  // watch all fields
  const values = watch();

  // errors
  const { errors } = formState;

  return { values, errors, formState, watch, ...otherValues };
};

export default useHookForm;
