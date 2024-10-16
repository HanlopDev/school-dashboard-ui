const Announcements = () => {
  return (
    <div className='bg-white rounded-md p-4'>
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400">view all</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-lamaSkyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
                    <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
                        2024-1-2
                    </span>
                </div>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit qui quidem amet autem non est? Natus, 
                    eligendi a! Earum, aperiam.</p>
            </div>
            <div className="bg-lamaPurpleWhite rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
                    <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
                        2024-1-2
                    </span>
                </div>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit qui quidem amet autem non est? Natus,
                    eligendi a! Earum, aperiam.</p>
            </div>
            <div className="bg-lamaYellowLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
                    <span className="text-sm text-gray-400 bg-white rounded-md px-1  py-1">
                        2024-1-2
                    </span>
                </div>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit qui quidem amet autem non est? Natus,
                    eligendi a! Earum, aperiam.</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements