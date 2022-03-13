import { Controller } from 'react-hook-form';

import type { InputProps } from '@/types';

import * as S from './styles';

export const Input = ({ control, name, error }: InputProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <S.Input value={value || ''} onChange={onChange} error={error} />
        )}
      />
      {error && <S.Error>{error}</S.Error>}
    </>
  );
};
