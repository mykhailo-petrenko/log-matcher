import React, { FC, memo, useCallback, useState } from 'react';
import { LogUpload } from './LogUpload';

export const Main: FC = memo(function Main(){
  const [error, setError] = useState<string | null>(null);
  const [file, setSelectedFile] = useState<File | null>(null);

  const onSelectFile = useCallback((selectedFile: File) => {
    setError(null);
    setSelectedFile(selectedFile);

  }, [setError, setSelectedFile]);

  return <>
    <header>
      <LogUpload
        error={setError}
        selectedFile={onSelectFile}
      />
      {(error) ? error : ''}
    </header>
    <hr />
    <section>
      {file?.size}
    </section>
    <footer>

    </footer>
  </>;
});
