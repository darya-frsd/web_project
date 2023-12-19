document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('scheduleForm');
    const scheduleContainer = document.getElementById('scheduleContainer');

    const savedParams = localStorage.getItem('scheduleParams');
    if (savedParams) {
        const { days, maxLessons, language } = JSON.parse(savedParams);
        form.elements.days.value = days;
        form.elements.maxLessons.value = maxLessons;
        form.elements.language.value = language;
    }

    let savedSubjects = getSubjectsFromLocalStorage();

    const repeatedSubjects = repeatSubjects(savedSubjects, 1);
    const scheduleTable = generateSchedule(form.elements.days.value, form.elements.maxLessons.value, form.elements.language.value, repeatedSubjects);
    scheduleContainer.innerHTML = '';
    scheduleContainer.appendChild(scheduleTable);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const days = form.elements.days.value;
        const maxLessons = form.elements.maxLessons.value;
        const language = form.elements.language.value;
        const addLessons = 1;
        const subjects = form.elements.subjects.value;
        const subjectList = subjects.split(',').map(subject => subject.trim());

        savedSubjects = savedSubjects.concat(subjectList);
        addSubjectsToLocalStorage(savedSubjects);

        const repeatedSubjects = repeatSubjects(savedSubjects, addLessons);

        const scheduleTable = generateSchedule(days, maxLessons, language, repeatedSubjects);
        scheduleContainer.innerHTML = '';
        scheduleContainer.appendChild(scheduleTable);
    });

    function addSubjectsToLocalStorage(subjectList) {
        localStorage.setItem('subjects', JSON.stringify(subjectList));
    }

    function getSubjectsFromLocalStorage() {
        return JSON.parse(localStorage.getItem('subjects')) || [];
    }

    function repeatSubjects(subjectList, addLessons) {
        const repeatedSubjects = [];
        for (let i = 0; i < addLessons; i++) {
            repeatedSubjects.push(...subjectList);
        }
        return repeatedSubjects;
    }

    function generateSchedule(days, maxLessons, language, subjectList) {
        const table = document.createElement('table');
        table.classList.add('schedule-table');

        const headerRow = document.createElement('tr');
        const headerCell = document.createElement('th');
        headerCell.textContent = `Расписание (${language})`;
        headerCell.colSpan = days;
        headerRow.appendChild(headerCell);
        table.appendChild(headerRow);

        const dayHeaderRow = document.createElement('tr');
        for (let i = 0; i < days; i++) {
            const dayCell = document.createElement('th');
            dayCell.textContent = `День ${i + 1}`;
            dayHeaderRow.appendChild(dayCell);
        }
        table.appendChild(dayHeaderRow);

        for (let j = 0; j < maxLessons; j++) {
            const lessonRow = document.createElement('tr');

            for (let i = 0; i < days; i++) {
                const subjectIndex = i * maxLessons + j;
                const subjectCell = document.createElement('td');
                subjectCell.textContent = subjectList[subjectIndex % subjectList.length];
                lessonRow.appendChild(subjectCell);
            }

            table.appendChild(lessonRow);
        }

        return table;
    }
});
