import { ChangeEvent, FC, memo, useCallback } from 'react';
import { Button, styled } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export interface LogUploadParams {
  error: (message: string | null) => void;
  selectedFile: (file: File) => void;
}

export const LogUpload: FC<LogUploadParams> = memo(function LogUpload(params: LogUploadParams){
  const selectedFile = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const files: FileList = event.target?.files;

    if (!files || files.length === 0) {
      params.error('no csv file selected');
      console.warn('no csv file selected', event);
      return;
    }

    const logFile = files[0];
    params.selectedFile(logFile);
  }, []);

  return <>
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUpload></CloudUpload>}
    >
      Upload Log file (CSV)
      <VisuallyHiddenInput
        type="file"
        onChange={selectedFile}
        multiple
      />
    </Button>
  </>;
});
