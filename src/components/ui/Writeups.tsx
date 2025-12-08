import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table.tsx'

type Writeup = {
  title: string
  date: string
  labType: string
  focus: string
  tools: string[]
  url: string
}

const writeups: Writeup[] = [
  {
    title: 'WebStrike',
    date: 'Dec 2025',
    labType: 'CyberDefenders',
    focus: 'Investigating web server compromise with Wireshark.',
    tools: ['Wireshark'],
    url: '/writeups/CD_WebStrike_WriteUp.pdf',
  },
]

export function WriteupsTable() {
  const handleOpenPdf = (pdf: string) => {
    window.open(pdf, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="writeups"
      className="max-w-6xl w-full mx-auto px-6 md:px-0 mb-12 slide-enter-content opacity-90"
    >
      <h2 className="titles text-left text-black dark:text-white mb-4">
        Lab Write-ups
      </h2>

      <div className="p-4 text-black dark:text-white grid-cols-4 grid-rows-3 gap-4 mt-1 mb-6 rounded-xl transition-all 
      duration-300 transform border border-transparent hover:border-green-700 dark:hover:border-blue-300 md:hover:scale-105 !opacity-90 
      hover:!opacity-100 hover:bg-gray-100/50 dark:hover:bg-gray-900/50 scale-[1.12] hover:scale-114 md:scale-100">
        <Table>
          <TableCaption className="text-xs text-gray-500 dark:text-gray-400">
            Click any row to open the full PDF write-up.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[25%]">Title</TableHead>
              <TableHead className="w-[15%]">Lab Type</TableHead>
              <TableHead className="w-[30%]">Focus</TableHead>
              <TableHead className="w-[30%]">Tools</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {writeups.map((w) => (
              <TableRow
                key={w.title}
                onClick={() => handleOpenPdf(w.url)}
                className="cursor-pointer transition"
              >
                <TableCell>
                  <div className="font-medium text-gray-900 dark:text-gray-50">
                    {w.title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {w.date}
                  </div>
                </TableCell>

                <TableCell className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  {w.labType}
                </TableCell>

                <TableCell className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                  {w.focus}
                </TableCell>

                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {w.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[0.7rem] text-gray-700 dark:text-gray-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
