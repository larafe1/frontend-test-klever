import { Controller } from 'react-hook-form';

import type { InputProps } from '@/types';

import * as S from './styles';

export const Input = ({ control, name, defaultValue, error }: InputProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <S.Input
            value={value || ''}
            onChange={({ target }) => onChange(target.value)}
            error={error}
          />
        )}
      />
      {error && <S.Error>{error}</S.Error>}
    </>
  );
};
