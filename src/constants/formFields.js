export const FORM_FIELDS = {
    NAME: 'name',
    EMAIL: 'email',
    SELECTED_MOVIE: 'selectedMovie',
    COMMENT: 'comment'
  };
  
  export const FIELD_LABELS = {
    [FORM_FIELDS.NAME]: 'ชื่อ',
    [FORM_FIELDS.EMAIL]: 'อีเมล',
    [FORM_FIELDS.SELECTED_MOVIE]: 'เลือกหนังที่คุณชอบ',
    [FORM_FIELDS.COMMENT]: 'ความคิดเห็น'
  };
  
  export const FIELD_PLACEHOLDERS = {
    [FORM_FIELDS.NAME]: 'กรุณาใส่ชื่อของคุณ',
    [FORM_FIELDS.EMAIL]: 'example@email.com',
    [FORM_FIELDS.COMMENT]: 'แบ่งปันความคิดเห็นของคุณเกี่ยวกับภาพยนตร์...'
  };
  
  export const REQUIRED_FIELDS = [
    FORM_FIELDS.NAME,
    FORM_FIELDS.EMAIL,
    FORM_FIELDS.SELECTED_MOVIE
  ];