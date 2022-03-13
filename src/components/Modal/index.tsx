import { Text, Button } from '@/components';
import type { ModalProps } from '@/types';

import * as S from './styles';

export const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  content
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <S.Wrapper>
          <S.Backdrop />
          <S.ModalWrapper>
            <S.Header>
              <Text>{title}</Text>
            </S.Header>

            <S.Body>
              <Text>{content}</Text>

              <S.ButtonWrapper>
                <Button
                  rounded
                  title="Cancel"
                  color="primary"
                  onClick={onClose}
                />
                <Button
                  rounded
                  title="Confirm"
                  color="error"
                  onClick={onConfirm}
                />
              </S.ButtonWrapper>
            </S.Body>
          </S.ModalWrapper>
        </S.Wrapper>
      )}
    </>
  );
};
