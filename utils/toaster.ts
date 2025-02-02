import { toast } from 'react-toastify'

type Props = {
  title: string
  status: 'SUCCESS' | 'ERROR' | 'WARNING'
  position?: 'top-center' | 'bottom-right' | 'top-right' | 'bottom-center'
}

enum Status {
  SUCCESS,
  ERROR,
  WARNING,
}

enum Position {
  TOP_CENTER = 'top-center',
  BOTTOM_RIGHT = 'bottom-right',
  TOP_RIGHT = 'top-right',
  BOTTOM_CENTER = 'bottom-center',
}

export const toaster = (
  title: string,
  status: 'SUCCESS' | 'ERROR' | 'WARNING',
  position:
    | 'top-center'
    | 'bottom-right'
    | 'top-right'
    | 'bottom-center' = 'top-center'
) => {
  switch (status) {
    case 'SUCCESS':
      return toast.success(title, {
        position: position,
      })

    case 'ERROR':
      return toast.error(title, {
        position: position,
      })
    case 'WARNING':
      return toast.warning(title, {
        position: position,
      })
  }
}
