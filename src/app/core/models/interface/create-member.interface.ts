export interface CreateMemberModel {
  id: string | number;
  userName: string;
  email: string;
  phone: string;
  type: string;
  status: string;
  historic?: string;
}

export type CreateMemberRequiredProps = Omit<CreateMemberModel, 'id'>;

export type CreateMemberStatus = 'Saved' | 'Error';
