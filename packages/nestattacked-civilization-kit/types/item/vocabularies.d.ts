interface FixVocabulariesAttributes {
  Vocabulary: string;
}

interface FloatVocabulariesAttributes {
  Vocabulary?: string;
}

export function createVocabularies(attributes: FixVocabulariesAttributes): void;
