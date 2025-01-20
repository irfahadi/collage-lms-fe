import { google } from 'googleapis'

const SERVICE_ACCOUNT_EMAIL =
  process.env.NEXT_PUBLIC_SERVICE_ACCOUNT_EMAIL || ''
const PRIVATE_KEY = process.env.API_KEY || ''
const SCOPES = ['https://www.googleapis.com/auth/drive.file']
const FOLDER_NAME = 'dev-ma-orthodontics'

// Create a new JWT client using the service account credentials
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: SERVICE_ACCOUNT_EMAIL,
    private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: SCOPES,
})

// Function to get or create a folder by its name
export async function getOrCreateFolder(
  drive: any,
  folderName: string
): Promise<string> {
  const response = await drive.files.list({
    q: `mimeType='application/vnd.google-apps.folder' and name='${folderName}'`,
    fields: 'files(id)',
  })

  if (response.data.files.length > 0) {
    // Folder already exists, return its ID
    return response.data.files[0].id
  } else {
    // Folder doesn't exist, create it and return its ID
    const folderMetadata = {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
    }

    const createdFolder = await drive.files.create({
      resource: folderMetadata,
      fields: 'id',
    })

    return createdFolder.data.id
  }
}

export { auth, google, FOLDER_NAME }
